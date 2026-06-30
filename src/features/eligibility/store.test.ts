import { describe, expect, it } from "vitest";
import { createEligibilityStore } from "./store";
import { buildSteps, evaluate } from "./steps";
import type { Answers } from "./types";

const OCCUPANT = "Oui, c’est ma résidence principale";

describe("buildSteps", () => {
  it("asks 4 base questions by default", () => {
    expect(buildSteps({}).map((s) => s.key)).toEqual([
      "chauffage",
      "codepostal",
      "statut",
      "habitation",
    ]);
  });

  it("adds the mazout question when heating is oil", () => {
    const a: Answers = { chauffage: "Mazout (huile)" };
    expect(buildSteps(a).map((s) => s.key)).toContain("mazout500");
  });

  it("adds the income question only for an oil-heated principal residence", () => {
    const a: Answers = { chauffage: "Mazout (huile)", statut: OCCUPANT };
    expect(buildSteps(a).map((s) => s.key)).toContain("revenu");
  });
});

describe("evaluate", () => {
  it("marks a tenant ineligible with a reason", () => {
    const ev = evaluate({ statut: "Non, je suis locataire" });
    expect(ev.admissible).toBe(false);
    expect(ev.reason).toMatch(/locataire/);
  });

  it("qualifies an owner-occupier for LogisVert (6 700 $)", () => {
    const ev = evaluate({ statut: OCCUPANT, chauffage: "Plinthes électriques" });
    expect(ev.logis).toBe(true);
    expect(ev.camt).toBe(false);
    expect(ev.total).toBe(6700);
  });

  it("cumulates LogisVert + CAMT for an eligible oil-heated owner (16 950 $)", () => {
    const ev = evaluate({
      statut: OCCUPANT,
      chauffage: "Mazout (huile)",
      mazout500: "Oui, j’ai les reçus",
      revenu: "Moins de 50 000 $",
    });
    expect(ev.camt).toBe(true);
    expect(ev.total).toBe(16950);
  });

  it("excludes CAMT when income is over the cap", () => {
    const ev = evaluate({
      statut: OCCUPANT,
      chauffage: "Mazout (huile)",
      mazout500: "Oui, j’ai les reçus",
      revenu: "Plus de 120 000 $",
    });
    expect(ev.camt).toBe(false);
    expect(ev.total).toBe(6700);
  });
});

describe("eligibility store", () => {
  it("records an answer and advances the step", () => {
    const store = createEligibilityStore();
    store.getState().choose("chauffage", "Mazout (huile)");
    expect(store.getState().answers.chauffage).toBe("Mazout (huile)");
    expect(store.getState().step).toBe(1);
  });

  it("never steps below zero on back", () => {
    const store = createEligibilityStore();
    store.getState().back();
    expect(store.getState().step).toBe(0);
  });

  it("rejects an invalid postal code and accepts a valid Québec one", () => {
    const store = createEligibilityStore();
    store.getState().setPostal("12345");
    store.getState().submitPostal();
    expect(store.getState().error).not.toBe("");
    expect(store.getState().step).toBe(0);

    store.getState().setPostal("G1A 1A1");
    store.getState().submitPostal();
    expect(store.getState().error).toBe("");
    expect(store.getState().step).toBe(1);
  });

  it("blocks an incomplete lead and passes a complete one", () => {
    const store = createEligibilityStore();
    expect(store.getState().validateLead()).toBeNull();
    expect(store.getState().leadError).not.toBe("");

    store.getState().setLeadField("prenom", "Marie");
    store.getState().setLeadField("nom", "Lefebvre");
    store.getState().setLeadField("courriel", "marie@example.com");
    store.getState().setPhone("4185550199");
    store.getState().chooseQuand("Dès que possible");
    expect(store.getState().validateLead()).not.toBeNull();
    expect(store.getState().lead.telephone).toBe("(418) 555-0199");
  });

  it("validates the notify email", () => {
    const store = createEligibilityStore();
    store.getState().setNotify("nope");
    expect(store.getState().validateNotify()).toBeNull();
    store.getState().setNotify("ok@example.com");
    expect(store.getState().validateNotify()).toBe("ok@example.com");
  });
});
