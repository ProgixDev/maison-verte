import { expect, test } from "@playwright/test";
import { shot } from "./utils/shot";

// CUJ-01 — Land and reach the eligibility quiz (docs/product/critical-user-journeys.md)
test("@cuj CUJ-01: visitor lands on the home page and starts the eligibility check", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /On trouve votre subvention/i })).toBeVisible();
  await shot(page, "home-landing");

  await page
    .getByRole("link", { name: /Vérifier mon admissibilité gratuitement/i })
    .first()
    .click();
  await expect(page).toHaveURL(/\/admissibilite/);
  await expect(
    page.getByRole("heading", { name: /Comment chauffez-vous actuellement votre maison/i }),
  ).toBeVisible();
  await shot(page, "admissibilite-step-1");
});
