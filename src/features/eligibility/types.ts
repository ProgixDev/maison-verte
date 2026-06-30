export type StepType = "choice" | "postal";

export type Step = {
  key: string;
  type: StepType;
  q: string;
  help?: string;
  placeholder?: string;
  options?: string[];
};

export type Answers = Record<string, string>;

export type Lead = {
  prenom?: string;
  nom?: string;
  courriel?: string;
  telephone?: string;
  quand?: string;
};

export type Evaluation = {
  admissible: boolean;
  logis: boolean;
  camt: boolean;
  total: number;
  reason: string;
};
