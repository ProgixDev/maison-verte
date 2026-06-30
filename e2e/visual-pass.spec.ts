import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { expect, type Page, test } from "@playwright/test";

/**
 * @visual — full-site screenshot pass for the Maison Verte Québec build.
 * We scroll the page so every IntersectionObserver scroll-reveal fires, then
 * capture a full-page shot WITHOUT animation-rewind (the default shot() helper's
 * `animations: "disabled"` rewinds in-flight reveal transitions to opacity 0).
 */
test.use({
  // Standard runs use the config baseURL (port 3000). Override with BASE_URL when a
  // dev server is on another port (e.g. BASE_URL=http://localhost:3001 pnpm exec playwright …).
  baseURL: process.env.BASE_URL ?? "http://localhost:3000",
  viewport: { width: 1280, height: 900 },
});

// Reduced motion makes every scroll-reveal render at opacity 1 immediately, so a
// plain full-page shot captures the whole layout (no scroll/IO-timing dependency).
test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});

const dir = join("artifacts", "screenshots", "maison-verte");

async function revealAll(page: Page) {
  await page.evaluate(
    () =>
      new Promise<void>((resolve) => {
        let y = 0;
        const step = () => {
          window.scrollTo(0, y);
          y += 500;
          if (y < document.body.scrollHeight) setTimeout(step, 60);
          else {
            window.scrollTo(0, 0);
            setTimeout(resolve, 400);
          }
        };
        step();
      }),
  );
  await page.waitForTimeout(500);
}

async function cap(page: Page, name: string) {
  mkdirSync(dir, { recursive: true });
  await page.screenshot({ path: join(dir, `${name}.png`), fullPage: true });
}

const pages = [
  { path: "/", name: "01-accueil" },
  { path: "/subventions", name: "02-subventions" },
  { path: "/subventions/logisvert", name: "03-logisvert" },
  { path: "/subventions/camt", name: "04-camt" },
  { path: "/fonctionnement", name: "05-fonctionnement" },
  { path: "/faq", name: "06-faq" },
  { path: "/a-propos", name: "07-a-propos" },
  { path: "/confidentialite", name: "08-confidentialite" },
  { path: "/admissibilite", name: "09-admissibilite" },
];

for (const p of pages) {
  test(`@visual desktop ${p.name}`, async ({ page }) => {
    await page.goto(p.path, { waitUntil: "domcontentloaded" });
    await expect(page.locator("h1, h2").first()).toBeVisible();
    await revealAll(page);
    await cap(page, `desktop-${p.name}`);
  });
}

test("@visual mobile accueil + drawer", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await revealAll(page);
  await cap(page, "mobile-01-accueil");
  await page.getByRole("button", { name: "Ouvrir le menu" }).click();
  await page.waitForTimeout(250);
  await cap(page, "mobile-02-drawer");
});

test("@visual quiz — admissible flow + done", async ({ page }) => {
  await page.goto("/admissibilite", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: /Comment chauffez-vous/i })).toBeVisible();
  await cap(page, "quiz-1-step-1");

  await page.getByRole("button", { name: "Mazout (huile)" }).click();
  await expect(page.getByRole("heading", { name: /Dans quelle région/i })).toBeVisible();
  await cap(page, "quiz-2-postal");

  await page.getByPlaceholder("Ex. : G1A 1A1").fill("G1A 1A1");
  await page.getByRole("button", { name: /Continuer/ }).click();
  await page.getByRole("button", { name: /c.+est ma résidence principale/i }).click();
  await page.getByRole("button", { name: "Maison unifamiliale" }).click();
  await page.getByRole("button", { name: /j.+ai les reçus/i }).click();
  await page.getByRole("button", { name: /Moins de 50 000/ }).click();

  await expect(page.getByRole("heading", { name: /vous êtes admissible/i })).toBeVisible();
  await page.waitForTimeout(300);
  await cap(page, "quiz-3-result-admissible");

  await page.getByPlaceholder("Prénom").fill("Marie");
  await page.getByPlaceholder("Nom", { exact: true }).fill("Lefebvre");
  await page.getByPlaceholder("Courriel").fill("marie@example.com");
  await page.getByPlaceholder("Téléphone").fill("4185550199");
  await page.getByRole("button", { name: "Dès que possible" }).click();
  await page.getByRole("button", { name: /Recevoir mon rapport complet/ }).click();

  await expect(page.getByRole("heading", { name: /votre rapport est en route/i })).toBeVisible();
  await cap(page, "quiz-4-done");
});

test("@visual quiz — non-admissible (locataire)", async ({ page }) => {
  await page.goto("/admissibilite", { waitUntil: "domcontentloaded" });
  await page.getByRole("button", { name: "Plinthes électriques" }).click();
  await page.getByPlaceholder("Ex. : G1A 1A1").fill("H2X 1Y4");
  await page.getByRole("button", { name: /Continuer/ }).click();
  await page.getByRole("button", { name: /je suis locataire/i }).click();
  await page.getByRole("button", { name: "Condo" }).click();
  await expect(page.getByRole("heading", { name: /ne semblez pas admissible/i })).toBeVisible();
  await cap(page, "quiz-5-result-non");
});
