import type { Answers, Evaluation, Step } from "./types";

/** Answer values that gate downstream questions and the eligibility verdict. */
export const MAZOUT = "Mazout (huile)";
export const OCCUPANT = "Oui, c’est ma résidence principale";
export const LOCATAIRE = "Non, je suis locataire";

export const QUAND_OPTIONS = [
  "Dès que possible",
  "Dans le mois",
  "Dans les 3 mois",
  "Je me renseigne",
];

/** Any valid Canadian postal code (A1A 1A1). Collected for the advisor, not used to
 *  score eligibility — so we accept every province, not just Québec's G/H/J prefixes. */
export const POSTAL_RE = /^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/;
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Builds the (branching) question list from the answers gathered so far. */
export function buildSteps(a: Answers): Step[] {
  const steps: Step[] = [
    {
      key: "chauffage",
      type: "choice",
      q: "Comment chauffez-vous actuellement votre maison ?",
      options: [
        "Mazout (huile)",
        "Plinthes électriques",
        "Vieille thermopompe (10 ans +)",
        "Gaz naturel",
        "Autre",
      ],
    },
    {
      key: "codepostal",
      type: "postal",
      q: "Dans quelle région se trouve votre maison ?",
      help: "Entrez votre code postal.",
      placeholder: "Ex. : G1A 1A1",
    },
    {
      key: "statut",
      type: "choice",
      q: "Êtes-vous propriétaire de cette maison ?",
      options: [
        "Oui, c’est ma résidence principale",
        "Oui, mais résidence secondaire ou locative",
        "Non, je suis locataire",
      ],
    },
    {
      key: "habitation",
      type: "choice",
      q: "Quel type d’habitation possédez-vous ?",
      options: [
        "Maison unifamiliale",
        "Maison jumelée ou en rangée",
        "Duplex / triplex",
        "Condo",
        "Autre",
      ],
    },
  ];

  if (a.chauffage === MAZOUT) {
    steps.push({
      key: "mazout500",
      type: "choice",
      q: "Avez-vous acheté au moins 500 litres de mazout dans les 12 derniers mois ?",
      options: [
        "Oui, j’ai les reçus",
        "Oui, mais pas sûr d’avoir les reçus",
        "Non",
        "Je ne sais pas",
      ],
    });
    if (a.statut === OCCUPANT) {
      steps.push({
        key: "revenu",
        type: "choice",
        q: "Quel est approximativement le revenu de votre ménage (après impôt) ?",
        help: "Sert uniquement à évaluer votre admissibilité au CAMT (plafond de revenu). Strictement confidentiel.",
        options: [
          "Moins de 50 000 $",
          "Entre 50 000 $ et 90 000 $",
          "Entre 90 000 $ et 120 000 $",
          "Plus de 120 000 $",
        ],
      });
    }
  }
  return steps;
}

/** Scores the answers into the eligibility verdict and estimated total. */
export function evaluate(a: Answers): Evaluation {
  const occupant = a.statut === OCCUPANT;
  const logis = occupant; // LogisVert: propriétaire occupant au Québec
  const camt =
    occupant &&
    a.chauffage === MAZOUT &&
    !!a.mazout500 &&
    a.mazout500 !== "Non" &&
    !!a.revenu &&
    a.revenu !== "Plus de 120 000 $";

  let total = 0;
  if (logis) total += 6700;
  if (camt) total += 10250;

  let reason = "";
  if (!occupant) {
    reason =
      a.statut === LOCATAIRE
        ? "Ces programmes s’adressent aux propriétaires d’une résidence principale. En tant que locataire, vous n’y êtes pas admissible — mais votre propriétaire pourrait l’être."
        : "Ces programmes exigent que la maison soit votre résidence principale. Les résidences secondaires et locatives ne sont pas admissibles.";
  }

  return { admissible: logis || camt, logis, camt, total, reason };
}

/** Progressive (xxx) xxx-xxxx formatting as the user types. */
export function formatPhone(value: string): string {
  const d = (value || "").replace(/\D/g, "").slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

/** fr-CA money formatting, e.g. 16950 → "16 950 $". */
export function formatMoney(n: number): string {
  return `${n.toLocaleString("fr-CA")} $`;
}
