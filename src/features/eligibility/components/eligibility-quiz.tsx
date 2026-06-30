"use client";

import { ArrowLeft, ArrowRight, Check, ChevronRight, CircleAlert, Info, Lock } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { recordLead, recordNotify } from "../actions";
import { useEligibilityStore } from "../provider";
import { buildSteps, evaluate, formatMoney, QUAND_OPTIONS } from "../steps";

const inputClass =
  "w-full rounded-xl border-[1.5px] border-pine/20 bg-white px-4 py-3.5 text-[16px] text-pine outline-none";
const errorClass = "mt-2.5 flex items-center gap-1.5 text-[14px] text-[#c0392b]";

const advisorSteps = [
  "Un conseiller vous contacte dans les 24 heures pour valider votre dossier et confirmer le montant exact.",
  "On vous met en relation avec un installateur partenaire certifié RBQ de votre région, équipement garanti admissible.",
  "On vous accompagne jusqu’au versement. Vous n’avez qu’à attendre votre dépôt.",
];

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

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [step]);

  const steps = buildSteps(answers);
  const total = steps.length;
  const ev = evaluate(answers);

  const cardClass =
    "rounded-[26px] border border-pine/[0.08] bg-card shadow-[0_18px_44px_rgba(18,61,43,0.08)]";

  // ===== ÉCRAN DE FIN =====
  if (submitted) {
    const title = ev.admissible
      ? "Merci ! Votre rapport est en route."
      : "Merci, on vous tiendra informé.";
    const text = ev.admissible
      ? "Un conseiller analysera votre admissibilité et vous contactera généralement sous 24 h. Merci de faire confiance à Maison Verte Québec."
      : "Dès qu’un programme correspondant à votre situation est lancé, on vous écrit. Merci de votre visite.";
    return (
      <div className={cn(cardClass, "mvq-pop p-[clamp(32px,5vw,52px)] text-center")}>
        <span className="bg-lime text-pine mx-auto grid size-[72px] place-items-center rounded-full">
          <Check className="size-[34px]" strokeWidth={2.6} />
        </span>
        <h2 className="text-pine mt-[22px] font-serif text-[clamp(26px,4.2vw,38px)] leading-[1.12]">
          {title}
        </h2>
        <p className="text-moss mx-auto mt-4 max-w-[46ch] text-[16.5px] leading-[1.62]">{text}</p>
        <Link
          href="/"
          className="border-pine/20 text-pine hover:bg-pine/[0.06] mt-[30px] inline-flex items-center gap-2.5 rounded-full border-[1.5px] px-[26px] py-3.5 text-[16px] font-semibold transition-colors"
        >
          Retour à l’accueil
        </Link>
      </div>
    );
  }

  // ===== RÉSULTATS =====
  if (step >= total) {
    if (ev.admissible) {
      const handleLead = (e: React.FormEvent) => {
        e.preventDefault();
        const valid = validateLead();
        if (valid) {
          void recordLead({ ...valid, answers, estimate: ev.total });
          markSubmitted();
        }
      };
      return (
        <div className={cn(cardClass, "mvq-pop p-[clamp(26px,5vw,42px)]")}>
          <div className="text-center">
            <span className="bg-lime text-pine mx-auto grid size-16 place-items-center rounded-full">
              <Check className="size-[30px]" strokeWidth={2.6} />
            </span>
            <h2 className="text-pine mt-[18px] font-serif text-[clamp(25px,4vw,36px)] leading-[1.12]">
              Bonne nouvelle, vous êtes admissible.
            </h2>
            <p className="text-moss mt-3 text-[16px]">
              Selon vos réponses, vous pourriez recevoir jusqu’à
            </p>
            <div className="text-forest mt-1 font-serif text-[clamp(44px,9vw,60px)] leading-[1.05]">
              {formatMoney(ev.total)}
            </div>
          </div>

          <div className="mt-[22px] flex flex-col gap-2.5">
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
          </div>

          <div className="border-pine/10 mt-[26px] border-t pt-[22px]">
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
          </div>

          <form onSubmit={handleLead} className="border-pine/10 mt-[26px] border-t pt-[22px]">
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
                  <button
                    key={label}
                    type="button"
                    onClick={() => chooseQuand(label)}
                    className={cn(
                      "cursor-pointer rounded-full border-[1.5px] px-4 py-2.5 text-[14px] font-semibold transition-all",
                      selected
                        ? "border-lime bg-lime text-pine"
                        : "border-pine/15 text-fern bg-[#f7faee]",
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            {leadError ? (
              <p className={errorClass}>
                <CircleAlert className="size-[15px] shrink-0" />
                {leadError}
              </p>
            ) : null}
            <button
              type="submit"
              className="bg-lime text-pine hover:bg-lime-hover mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[17px] font-bold shadow-[0_12px_30px_rgba(18,61,43,0.15)] transition-transform hover:-translate-y-0.5"
            >
              Recevoir mon rapport complet <ArrowRight className="size-[18px]" />
            </button>
            <p className="mt-3.5 text-[12.5px] leading-[1.5] text-[#7a8a7a]">
              Vos informations restent confidentielles. Pas de spam, pas de vente de données. En
              soumettant, vous acceptez d’être contacté par un conseiller Maison Verte Québec et, si
              vous le souhaitez, par un installateur partenaire.
            </p>
          </form>
        </div>
      );
    }

    const handleNotify = (e: React.FormEvent) => {
      e.preventDefault();
      const valid = validateNotify();
      if (valid) {
        void recordNotify({ courriel: valid });
        markSubmitted();
      }
    };
    return (
      <div className={cn(cardClass, "mvq-pop p-[clamp(26px,5vw,42px)]")}>
        <span className="bg-sage text-forest mx-auto grid size-[60px] place-items-center rounded-full">
          <Info className="size-7" />
        </span>
        <h2 className="text-pine mt-[18px] text-center font-serif text-[clamp(23px,3.6vw,32px)] leading-[1.15]">
          Vous ne semblez pas admissible aux programmes actuels.
        </h2>
        <p className="text-moss mx-auto mt-3.5 max-w-[46ch] text-center text-[15.5px] leading-[1.6]">
          {ev.reason}
        </p>
        <p className="text-moss mx-auto mt-5 max-w-[48ch] text-center text-[15.5px] leading-[1.6]">
          Mais ne partez pas tout de suite. Les programmes évoluent, et de nouvelles subventions
          sont régulièrement annoncées. Laissez-nous votre courriel — on vous tiendra informé dès
          qu’un programme correspond à votre situation.
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
              className="border-pine/20 text-pine flex-1 basis-[200px] rounded-xl border-[1.5px] bg-white px-[17px] py-[15px] text-[16px] outline-none"
            />
            <button
              type="submit"
              className="bg-pine text-cream-soft inline-flex cursor-pointer items-center gap-2 rounded-xl px-6 py-[15px] text-[15.5px] font-bold transition-transform hover:-translate-y-0.5"
            >
              Me tenir informé
            </button>
          </div>
          {notifyError ? <p className="mt-2.5 text-[14px] text-[#c0392b]">{notifyError}</p> : null}
        </form>
        <div className="mt-5 text-center">
          <Link href="/" className="text-stone hover:text-pine text-[14px] transition-colors">
            Retour à l’accueil
          </Link>
        </div>
      </div>
    );
  }

  // ===== QUESTION =====
  const cur = steps[step];
  if (!cur) return null;
  const progress = Math.round(((step + 1) / total) * 100);

  return (
    <>
      <div className={cn(cardClass, "p-[clamp(24px,5vw,40px)]")}>
        <div className="mb-2.5 flex items-center justify-between gap-3.5">
          <button
            type="button"
            onClick={back}
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
            className="bg-lime h-full rounded-full transition-[width] duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <h2 className="text-pine font-serif text-[clamp(22px,3.4vw,30px)] leading-[1.2] tracking-[-0.01em]">
          {cur.q}
        </h2>
        {cur.help ? (
          <p className="text-stone mt-2.5 text-[14.5px] leading-[1.55]">{cur.help}</p>
        ) : null}

        <div key={step} className="mvq-step-in mt-6 min-h-[120px]">
          {cur.type === "choice" ? (
            <div className="flex flex-col gap-[11px]">
              {cur.options?.map((label) => {
                const selected = answers[cur.key] === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => choose(cur.key, label)}
                    className="border-pine/15 text-pine hover:border-forest flex w-full cursor-pointer items-center justify-between gap-3 rounded-[14px] border-[1.5px] bg-[#f7faee] px-[19px] py-[17px] text-left text-[16px] font-semibold transition-[border-color,background-color,transform] hover:-translate-y-px hover:bg-[#eef4de]"
                  >
                    <span>{label}</span>
                    {selected ? (
                      <span className="bg-lime text-pine grid size-6 shrink-0 place-items-center rounded-full">
                        <Check className="size-[15px]" strokeWidth={3} />
                      </span>
                    ) : (
                      <ChevronRight className="size-[18px] shrink-0 text-[#9aae96]" />
                    )}
                  </button>
                );
              })}
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitPostal();
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={answers[cur.key] ?? ""}
                onChange={(e) => setPostal(e.target.value)}
                placeholder={cur.placeholder}
                aria-label={cur.q}
                maxLength={7}
                className="border-pine/20 text-pine w-full rounded-[14px] border-[1.5px] bg-white px-[18px] py-4 text-[18px] uppercase outline-none"
              />
              {error ? (
                <p className={errorClass}>
                  <CircleAlert className="size-[15px] shrink-0" />
                  {error}
                </p>
              ) : null}
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="bg-lime text-pine hover:bg-lime-hover inline-flex cursor-pointer items-center gap-2.5 rounded-full px-7 py-3.5 text-[16px] font-bold shadow-[0_10px_24px_rgba(18,61,43,0.14)] transition-transform hover:-translate-y-0.5"
                >
                  Continuer <ArrowRight className="size-[17px]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <p className="mt-[18px] flex items-center justify-center gap-1.5 text-center text-[13px] text-[#7a8a7a]">
        <Lock className="size-3.5" /> Vos informations restent confidentielles (Loi 25).
      </p>
    </>
  );
}
