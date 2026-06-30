import type { Metadata } from "next";
import { EligibilityQuiz, EligibilityQuizProvider } from "@/features/eligibility";

export const metadata: Metadata = {
  title: "Vérifier mon admissibilité",
  description:
    "En 2 minutes, évaluez votre admissibilité à LogisVert et au CAMT. Sans inscription, sans engagement, sans carte de crédit.",
  alternates: { canonical: "/admissibilite" },
};

export default function AdmissibilitePage() {
  return (
    <main className="px-5 pt-[clamp(26px,4vw,48px)] pb-[clamp(56px,8vw,80px)]">
      <div className="mx-auto w-full max-w-[640px]">
        <div className="mb-6 text-center">
          <h1 className="text-pine font-serif text-[clamp(27px,4.4vw,40px)] leading-[1.1] tracking-[-0.01em]">
            En 2 minutes, vous saurez combien vous pouvez recevoir.
          </h1>
          <p className="text-moss mx-auto mt-3.5 max-w-[46ch] text-[16px] leading-[1.55]">
            Pas d’inscription. Pas de carte de crédit. Pas d’engagement. Juste quelques questions
            pour évaluer votre admissibilité à LogisVert et au CAMT.
          </p>
        </div>
        <EligibilityQuizProvider>
          <EligibilityQuiz />
        </EligibilityQuizProvider>
      </div>
    </main>
  );
}
