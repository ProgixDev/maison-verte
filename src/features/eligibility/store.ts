import { devtools } from "zustand/middleware";
import { createStore } from "zustand/vanilla";
import { EMAIL_RE, formatPhone, POSTAL_RE } from "./steps";
import type { Answers, Lead } from "./types";

/**
 * SSR-safe vanilla store factory (docs/conventions/state.md): one instance per
 * mount via provider.tsx, never a module singleton. The quiz state machine and
 * its client-side validation live here so they can be tested headlessly.
 */
export type EligibilityState = {
  step: number;
  answers: Answers;
  lead: Lead;
  notify: string;
  error: string;
  leadError: string;
  notifyError: string;
  submitted: boolean;
  choose: (key: string, label: string) => void;
  back: () => void;
  setPostal: (value: string) => void;
  submitPostal: () => void;
  setLeadField: (key: keyof Lead, value: string) => void;
  setPhone: (value: string) => void;
  chooseQuand: (label: string) => void;
  /** Validates the lead form; returns the lead on success, else sets leadError. */
  validateLead: () => Lead | null;
  setNotify: (value: string) => void;
  /** Validates the notify email; returns it on success, else sets notifyError. */
  validateNotify: () => string | null;
  markSubmitted: () => void;
};

export type EligibilityStore = ReturnType<typeof createEligibilityStore>;

export function createEligibilityStore() {
  return createStore<EligibilityState>()(
    devtools(
      (set, get) => ({
        step: 0,
        answers: {},
        lead: {},
        notify: "",
        error: "",
        leadError: "",
        notifyError: "",
        submitted: false,

        choose: (key, label) =>
          set(
            (s) => ({ answers: { ...s.answers, [key]: label }, error: "", step: s.step + 1 }),
            undefined,
            "eligibility/choose",
          ),
        back: () =>
          set((s) => ({ step: Math.max(0, s.step - 1), error: "" }), undefined, "eligibility/back"),
        setPostal: (value) =>
          set(
            (s) => ({ answers: { ...s.answers, codepostal: value }, error: "" }),
            undefined,
            "eligibility/setPostal",
          ),
        submitPostal: () => {
          const v = (get().answers.codepostal || "").trim().toUpperCase();
          if (!v) {
            set(
              { error: "Veuillez entrer votre code postal." },
              undefined,
              "eligibility/postalError",
            );
            return;
          }
          if (!POSTAL_RE.test(v)) {
            set(
              { error: "Entrez un code postal du Québec valide (ex. : G1A 1A1)." },
              undefined,
              "eligibility/postalError",
            );
            return;
          }
          set((s) => ({ step: s.step + 1, error: "" }), undefined, "eligibility/submitPostal");
        },
        setLeadField: (key, value) =>
          set(
            (s) => ({ lead: { ...s.lead, [key]: value }, leadError: "" }),
            undefined,
            "eligibility/setLeadField",
          ),
        setPhone: (value) =>
          set(
            (s) => ({ lead: { ...s.lead, telephone: formatPhone(value) }, leadError: "" }),
            undefined,
            "eligibility/setPhone",
          ),
        chooseQuand: (label) =>
          set(
            (s) => ({ lead: { ...s.lead, quand: label }, leadError: "" }),
            undefined,
            "eligibility/chooseQuand",
          ),
        validateLead: () => {
          const l = get().lead;
          let err = "";
          if (!l.prenom?.trim()) err = "Votre prénom est requis.";
          else if (!l.nom?.trim()) err = "Votre nom est requis.";
          else if (!l.courriel || !EMAIL_RE.test(l.courriel)) err = "Adresse courriel invalide.";
          else if (!l.telephone || l.telephone.replace(/\D/g, "").length < 10)
            err = "Numéro de téléphone à 10 chiffres attendu.";
          else if (!l.quand) err = "Indiquez quand vous souhaitez démarrer.";
          if (err) {
            set({ leadError: err }, undefined, "eligibility/leadError");
            return null;
          }
          return l;
        },
        setNotify: (value) =>
          set({ notify: value, notifyError: "" }, undefined, "eligibility/setNotify"),
        validateNotify: () => {
          const v = get().notify;
          if (!EMAIL_RE.test(v || "")) {
            set(
              { notifyError: "Adresse courriel invalide." },
              undefined,
              "eligibility/notifyError",
            );
            return null;
          }
          return v;
        },
        markSubmitted: () => set({ submitted: true }, undefined, "eligibility/markSubmitted"),
      }),
      { name: "eligibility" },
    ),
  );
}
