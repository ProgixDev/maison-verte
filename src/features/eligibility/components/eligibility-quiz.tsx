"use client";

import { ArrowLeft, ArrowRight, Check, ChevronRight, CircleAlert, Info, Lock } from "lucide-react";
import type { Variants } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "@/components/motion";
import { cn } from "@/lib/utils";
import { recordLead, recordNotify } from "../actions";
import { useEligibilityStore } from "../provider";
import { buildSteps, evaluate, formatMoney, QUAND_OPTIONS } from "../steps";

const inputClass =
  "w-full rounded-xl border-[1.5px] border-pine/20 bg-white px-4 py-3.5 text-[16px] text-pine outline-none transition-[border-color,box-shadow] focus:border-forest focus:ring-2 focus:ring-forest/15";
const errorClass = "mt-2.5 flex items-center gap-1.5 text-[14px] text-[#c0392b]";

const advisorSteps = [
  "Un conseiller vous contacte dans les 24 heures pour valider votre dossier et confirmer le montant exact.",
  "On vous met en relation avec un installateur partenaire certifié RBQ de votre région, équipement garanti admissible.",
  "On vous accompagne jusqu’au versement. Vous n’avez qu’à attendre votre dépôt.",
];

/* ----------------------------------------------------------------------------
 * Motion (docs/conventions/motion.md). MotionProvider sets reducedMotion="user",
 * so these transforms are disabled automatically for reduced-motion users — the
 * UI stays fully usable without any manual gating.
 * -------------------------------------------------------------------------- */
const EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

/** Top-level screen swap: question ↔ result ↔ notify ↔ done. */
const screenV: Variants = {
  initial: { opacity: 0, y: 16, scale: 0.985 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.42, ease: EASE } },
  exit: { opacity: 0, y: -12, scale: 0.99, transition: { duration: 0.22, ease: "easeIn" } },
};

/** Per-question content: slides in from the direction of travel. */
const questionV: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir >= 0 ? 26 : -26 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.28, ease: EASE } },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir >= 0 ? -22 : 22,
    transition: { duration: 0.18, ease: "easeIn" },
  }),
};

/** Options cascade: container staggers its children. */
const optionsV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};
const optionItemV: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.34, ease: EASE } },
};

/** Result screen: staggered reveal of the headline, programs, steps and form. */
const resultStaggerV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};
const resultItemV: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};
const moneyV: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 220, damping: 15 } },
};
const popV: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 240, damping: 16, delay: 0.1 },
  },
};

export function EligibilityQuiz() {
  const step = useEligibilityStore((s) => s.step);
  const answers = useEligibilityStore((s) => s.answers);
  const lead = useEligibilityStore((s) => s.lead);
  const notify = useEligibilityStore((s) => s.notify);
  const error = useEligibilityStore((s) => s.error);
  const leadError = useEligibilityStore((s) => s.leadError);
  const notifyError = useEligibilityStore((s) => s.notifyError);
  const submitted = useEligibilityStore((s) => s.submitted);
  const choose = useEligibilityStore((s) => s.choose);
  const back = useEligibilityStore((s) => s.back);
  const setPostal = useEligibilityStore((s) => s.setPostal);
  const submitPostal = useEligibilityStore((s) => s.submitPostal);
  const setLeadField = useEligibilityStore((s) => s.setLeadField);
  const setPhone = useEligibilityStore((s) => s.setPhone);
  const chooseQuand = useEligibilityStore((s) => s.chooseQuand);
  const validateLead = useEligibilityStore((s) => s.validateLead);
  const setNotify = useEligibilityStore((s) => s.setNotify);
  const validateNotify = useEligibilityStore((s) => s.validateNotify);
  const markSubmitted = useEligibilityStore((s) => s.markSubmitted);

  // Direction of travel for the question slide (forward = +1, back = −1). Set by the
  // navigation handlers below so it's known before the step changes (no ref-in-render).
  const [direction, setDirection] = useState(1);
  const goChoose = (key: string, label: string) => {
    setDirection(1);
    choose(key, label);
  };
  const goBack = () => {
    setDirection(-1);
    back();
  };
  const goPostal = () => {
    setDirection(1);
    submitPostal();
  };

  // When the screen swaps (e.g. the tall result form collapses into the short
  // success card) the page height shrinks and the browser keeps its scroll
  // offset — leaving the user stranded in the footer. Scroll back to the quiz.
  const wrapRef = useRef<HTMLDivElement>(null);
  const prevScreenRef = useRef<string | null>(null);

  const steps = buildSteps(answers);
  const total = steps.length;
  const ev = evaluate(answers);
  const cur = steps[step];
  const progress = Math.round((Math.min(step + 1, total) / total) * 100);

  const cardClass =
    "rounded-[26px] border border-pine/[0.08] bg-card shadow-[0_18px_44px_rgba(18,61,43,0.08)]";

  const handleLead = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = validateLead();
    if (valid) {
      void recordLead({ ...valid, answers, estimate: ev.total });
      markSubmitted();
    }
  };

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = validateNotify();
    if (valid) {
      void recordNotify({ courriel: valid });
      markSubmitted();
    }
  };

  const doneTitle = ev.admissible
    ? "Merci ! Votre rapport est en route."
    : "Merci, on vous tiendra informé.";
  const doneText = ev.admissible
    ? "Un conseiller analysera votre admissibilité et vous contactera généralement sous 24 h. Merci de faire confiance à Maison Verte Québec."
    : "Dès qu’un programme correspondant à votre situation est lancé, on vous écrit. Merci de votre visite.";

  const screen = submitted
    ? "done"
    : step >= total
      ? ev.admissible
        ? "result"
        : "notify"
      : "question";

  useEffect(() => {
    if (prevScreenRef.current !== null && prevScreenRef.current !== screen) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      wrapRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
    prevScreenRef.current = screen;
  }, [screen]);

  return (
    <div ref={wrapRef} className="scroll-mt-24">
      <AnimatePresence mode="wait" initial={false}>
        {/* ===== ÉCRAN DE FIN ===== */}
        {screen === "done" ? (
          <m.div
            key="done"
            variants={screenV}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cn(cardClass, "p-[clamp(32px,5vw,52px)] text-center")}
          >
            <m.span
              variants={popV}
              initial="hidden"
              animate="show"
              className="bg-lime text-pine mx-auto grid size-[72px] place-items-center rounded-full"
            >
              <Check className="size-[34px]" strokeWidth={2.6} />
            </m.span>
            <h2 className="text-pine mt-[22px] font-serif text-[clamp(26px,4.2vw,38px)] leading-[1.12]">
              {doneTitle}
            </h2>
            <p className="text-moss mx-auto mt-4 max-w-[46ch] text-[16.5px] leading-[1.62]">
              {doneText}
            </p>
            <m.span className="inline-block" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/"
                className="border-pine/20 text-pine hover:bg-pine/[0.06] mt-[30px] inline-flex items-center gap-2.5 rounded-full border-[1.5px] px-[26px] py-3.5 text-[16px] font-semibold transition-colors"
              >
                Retour à l’accueil
              </Link>
            </m.span>
          </m.div>
        ) : null}

        {/* ===== RÉSULTAT — ADMISSIBLE ===== */}
        {screen === "result" ? (
          <m.div
            key="result"
            variants={screenV}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cn(cardClass, "p-[clamp(26px,5vw,42px)]")}
          >
            <m.div variants={resultStaggerV} initial="hidden" animate="show">
              <div className="text-center">
                <m.span
                  variants={popV}
                  className="bg-lime text-pine mx-auto grid size-16 place-items-center rounded-full"
                >
                  <Check className="size-[30px]" strokeWidth={2.6} />
                </m.span>
                <m.h2
                  variants={resultItemV}
                  className="text-pine mt-[18px] font-serif text-[clamp(25px,4vw,36px)] leading-[1.12]"
                >
                  Bonne nouvelle, vous êtes admissible.
                </m.h2>
                <m.p variants={resultItemV} className="text-moss mt-3 text-[16px]">
                  Selon vos réponses, vous pourriez recevoir jusqu’à
                </m.p>
                <m.div
                  variants={moneyV}
                  className="text-forest mt-1 font-serif text-[clamp(44px,9vw,60px)] leading-[1.05]"
                >
                  {formatMoney(ev.total)}
                </m.div>
              </div>

              <m.div variants={resultItemV} className="mt-[22px] flex flex-col gap-2.5">
                {ev.logis ? (
                  <div className="bg-sage flex items-center justify-between gap-2.5 rounded-[13px] px-[18px] py-3.5">
                    <span className="text-pine flex items-center gap-2.5 text-[15px] font-semibold">
                      <Check className="text-forest size-[18px]" /> LogisVert (Hydro-Québec)
                    </span>
                    <span className="text-forest text-[15px] font-bold whitespace-nowrap">
                      jusqu’à 6 700 $
                    </span>
                  </div>
                ) : null}
                {ev.camt ? (
                  <div className="bg-sage flex items-center justify-between gap-2.5 rounded-[13px] px-[18px] py-3.5">
                    <span className="text-pine flex items-center gap-2.5 text-[15px] font-semibold">
                      <Check className="text-forest size-[18px]" /> CAMT (Gouvernement du Canada)
                    </span>
                    <span className="text-forest text-[15px] font-bold whitespace-nowrap">
                      jusqu’à 10 250 $
                    </span>
                  </div>
                ) : null}
              </m.div>

              <m.div variants={resultItemV} className="border-pine/10 mt-[26px] border-t pt-[22px]">
                <h3 className="text-pine mb-4 text-[17px]">Voici ce qu’on va faire pour vous :</h3>
                <div className="flex flex-col gap-3">
                  {advisorSteps.map((body, i) => (
                    <div key={body} className="flex items-start gap-3">
                      <span className="bg-pine text-lime grid size-[26px] shrink-0 place-items-center rounded-full text-[13px] font-bold">
                        {i + 1}
                      </span>
                      <span className="text-moss text-[14.5px] leading-[1.5]">{body}</span>
                    </div>
                  ))}
                </div>
              </m.div>

              <m.form
                variants={resultItemV}
                onSubmit={handleLead}
                className="border-pine/10 mt-[26px] border-t pt-[22px]"
              >
                <p className="text-pine mb-4 text-[15.5px] font-semibold">
                  Pour recevoir votre rapport complet et être contacté par un conseiller :
                </p>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3">
                  <input
                    type="text"
                    value={lead.prenom ?? ""}
                    onChange={(e) => setLeadField("prenom", e.target.value)}
                    placeholder="Prénom"
                    aria-label="Prénom"
                    className={inputClass}
                  />
                  <input
                    type="text"
                    value={lead.nom ?? ""}
                    onChange={(e) => setLeadField("nom", e.target.value)}
                    placeholder="Nom"
                    aria-label="Nom"
                    className={inputClass}
                  />
                  <input
                    type="email"
                    value={lead.courriel ?? ""}
                    onChange={(e) => setLeadField("courriel", e.target.value)}
                    placeholder="Courriel"
                    aria-label="Courriel"
                    inputMode="email"
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    value={lead.telephone ?? ""}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Téléphone"
                    aria-label="Téléphone"
                    inputMode="tel"
                    className={inputClass}
                  />
                </div>
                <p className="text-pine mt-[18px] mb-2.5 text-[14px] font-semibold">
                  Quand souhaitez-vous démarrer ?
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {QUAND_OPTIONS.map((label) => {
                    const selected = lead.quand === label;
                    return (
                      <m.button
                        key={label}
                        type="button"
                        onClick={() => chooseQuand(label)}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                          "cursor-pointer rounded-full border-[1.5px] px-4 py-2.5 text-[14px] font-semibold transition-colors",
                          selected
                            ? "border-lime bg-lime text-pine"
                            : "border-pine/15 text-fern bg-[#f7faee]",
                        )}
                      >
                        {label}
                      </m.button>
                    );
                  })}
                </div>
                <AnimatePresence>
                  {leadError ? (
                    <m.p
                      key={leadError}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className={errorClass}
                    >
                      <CircleAlert className="size-[15px] shrink-0" />
                      {leadError}
                    </m.p>
                  ) : null}
                </AnimatePresence>
                <m.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-lime text-pine hover:bg-lime-hover mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[17px] font-bold shadow-[0_12px_30px_rgba(18,61,43,0.15)] transition-colors"
                >
                  Recevoir mon rapport complet <ArrowRight className="size-[18px]" />
                </m.button>
                <p className="mt-3.5 text-[12.5px] leading-[1.5] text-[#7a8a7a]">
                  Vos informations restent confidentielles. Pas de spam, pas de vente de données. En
                  soumettant, vous acceptez d’être contacté par un conseiller Maison Verte Québec
                  et, si vous le souhaitez, par un installateur partenaire.
                </p>
              </m.form>
            </m.div>
          </m.div>
        ) : null}

        {/* ===== RÉSULTAT — NON ADMISSIBLE ===== */}
        {screen === "notify" ? (
          <m.div
            key="notify"
            variants={screenV}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cn(cardClass, "p-[clamp(26px,5vw,42px)]")}
          >
            <m.span
              variants={popV}
              initial="hidden"
              animate="show"
              className="bg-sage text-forest mx-auto grid size-[60px] place-items-center rounded-full"
            >
              <Info className="size-7" />
            </m.span>
            <h2 className="text-pine mt-[18px] text-center font-serif text-[clamp(23px,3.6vw,32px)] leading-[1.15]">
              Vous ne semblez pas admissible aux programmes actuels.
            </h2>
            <p className="text-moss mx-auto mt-3.5 max-w-[46ch] text-center text-[15.5px] leading-[1.6]">
              {ev.reason}
            </p>
            <p className="text-moss mx-auto mt-5 max-w-[48ch] text-center text-[15.5px] leading-[1.6]">
              Mais ne partez pas tout de suite. Les programmes évoluent, et de nouvelles subventions
              sont régulièrement annoncées. Laissez-nous votre courriel — on vous tiendra informé
              dès qu’un programme correspond à votre situation.
            </p>
            <form onSubmit={handleNotify} className="mx-auto mt-6 max-w-[420px]">
              <div className="flex flex-wrap gap-2.5">
                <input
                  type="email"
                  value={notify}
                  onChange={(e) => setNotify(e.target.value)}
                  placeholder="Votre courriel"
                  aria-label="Votre courriel"
                  inputMode="email"
                  className="border-pine/20 text-pine focus:border-forest focus:ring-forest/15 flex-1 basis-[200px] rounded-xl border-[1.5px] bg-white px-[17px] py-[15px] text-[16px] transition-[border-color,box-shadow] outline-none focus:ring-2"
                />
                <m.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-pine text-cream-soft inline-flex cursor-pointer items-center gap-2 rounded-xl px-6 py-[15px] text-[15.5px] font-bold transition-colors"
                >
                  Me tenir informé
                </m.button>
              </div>
              <AnimatePresence>
                {notifyError ? (
                  <m.p
                    key={notifyError}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2.5 text-[14px] text-[#c0392b]"
                  >
                    {notifyError}
                  </m.p>
                ) : null}
              </AnimatePresence>
            </form>
            <div className="mt-5 text-center">
              <Link href="/" className="text-stone hover:text-pine text-[14px] transition-colors">
                Retour à l’accueil
              </Link>
            </div>
          </m.div>
        ) : null}

        {/* ===== QUESTION ===== */}
        {screen === "question" && cur ? (
          <m.div key="question" variants={screenV} initial="initial" animate="animate" exit="exit">
            <div className={cn(cardClass, "p-[clamp(24px,5vw,40px)]")}>
              <div className="mb-2.5 flex items-center justify-between gap-3.5">
                <button
                  type="button"
                  onClick={goBack}
                  aria-label="Précédent"
                  className={cn(
                    "text-stone hover:text-pine inline-flex cursor-pointer items-center gap-1.5 text-[14px] font-medium transition-colors",
                    step > 0 ? "visible" : "invisible",
                  )}
                >
                  <ArrowLeft className="size-4" /> Précédent
                </button>
                <span className="text-forest text-[13px] font-semibold tracking-[0.03em]">
                  Question {step + 1} sur {total}
                </span>
              </div>
              <div className="bg-pine/10 mb-[26px] h-1.5 overflow-hidden rounded-full">
                <div
                  className="bg-lime h-full rounded-full transition-[width] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <m.div
                  key={step}
                  custom={direction}
                  variants={questionV}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <h2 className="text-pine font-serif text-[clamp(22px,3.4vw,30px)] leading-[1.2] tracking-[-0.01em]">
                    {cur.q}
                  </h2>
                  {cur.help ? (
                    <p className="text-stone mt-2.5 text-[14.5px] leading-[1.55]">{cur.help}</p>
                  ) : null}

                  <div className="mt-6 min-h-[120px]">
                    {cur.type === "choice" ? (
                      <m.div
                        variants={optionsV}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col gap-[11px]"
                      >
                        {cur.options?.map((label) => {
                          const selected = answers[cur.key] === label;
                          return (
                            <m.button
                              key={label}
                              type="button"
                              variants={optionItemV}
                              onClick={() => goChoose(cur.key, label)}
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.985 }}
                              className="border-pine/15 text-pine hover:border-forest flex w-full cursor-pointer items-center justify-between gap-3 rounded-[14px] border-[1.5px] bg-[#f7faee] px-[19px] py-[17px] text-left text-[16px] font-semibold transition-[border-color,background-color] hover:bg-[#eef4de]"
                            >
                              <span>{label}</span>
                              {selected ? (
                                <m.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: "spring", stiffness: 420, damping: 20 }}
                                  className="bg-lime text-pine grid size-6 shrink-0 place-items-center rounded-full"
                                >
                                  <Check className="size-[15px]" strokeWidth={3} />
                                </m.span>
                              ) : (
                                <ChevronRight className="size-[18px] shrink-0 text-[#9aae96]" />
                              )}
                            </m.button>
                          );
                        })}
                      </m.div>
                    ) : (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          goPostal();
                        }}
                      >
                        <input
                          autoFocus
                          type="text"
                          value={answers[cur.key] ?? ""}
                          onChange={(e) => setPostal(e.target.value)}
                          placeholder={cur.placeholder}
                          aria-label={cur.q}
                          maxLength={7}
                          className="border-pine/20 text-pine focus:border-forest focus:ring-forest/15 w-full rounded-[14px] border-[1.5px] bg-white px-[18px] py-4 text-[18px] uppercase transition-[border-color,box-shadow] outline-none focus:ring-2"
                        />
                        <AnimatePresence>
                          {error ? (
                            <m.p
                              key={error}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className={errorClass}
                            >
                              <CircleAlert className="size-[15px] shrink-0" />
                              {error}
                            </m.p>
                          ) : null}
                        </AnimatePresence>
                        <div className="mt-6 flex justify-end">
                          <m.button
                            type="submit"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-lime text-pine hover:bg-lime-hover inline-flex cursor-pointer items-center gap-2.5 rounded-full px-7 py-3.5 text-[16px] font-bold shadow-[0_10px_24px_rgba(18,61,43,0.14)] transition-colors"
                          >
                            Continuer <ArrowRight className="size-[17px]" />
                          </m.button>
                        </div>
                      </form>
                    )}
                  </div>
                </m.div>
              </AnimatePresence>
            </div>
            <p className="mt-[18px] flex items-center justify-center gap-1.5 text-center text-[13px] text-[#7a8a7a]">
              <Lock className="size-3.5" /> Vos informations restent confidentielles (Loi 25).
            </p>
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
