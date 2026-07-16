import { beforeEach, describe, expect, it, vi } from "vitest";

// The mailer is server-only + SMTP; mock it so the actions can be tested headlessly.
type AdminMail = { subject: string; text: string; html?: string; replyTo?: string };
const sendAdminMail = vi.hoisted(() =>
  vi.fn<(mail: AdminMail) => Promise<boolean>>(async () => true),
);
vi.mock("@/lib/mailer", () => ({ sendAdminMail }));

import { recordLead, recordNotify } from "./actions";

describe("recordLead", () => {
  beforeEach(() => sendAdminMail.mockClear());

  it("rejects invalid input without emailing", async () => {
    const res = await recordLead({ prenom: "" });
    expect(res).toEqual({ ok: false, error: expect.any(String) });
    expect(sendAdminMail).not.toHaveBeenCalled();
  });

  it("emails the admin the lead details and quiz answers", async () => {
    const res = await recordLead({
      prenom: "Marie",
      nom: "Lefebvre",
      courriel: "marie@example.com",
      telephone: "(418) 555-0199",
      quand: "Dès que possible",
      answers: { chauffage: "Mazout (huile)" },
      estimate: 16950,
    });
    expect(res).toEqual({ ok: true });
    expect(sendAdminMail).toHaveBeenCalledTimes(1);
    const mail = sendAdminMail.mock.calls[0]![0];
    expect(mail.subject).toContain("Marie Lefebvre");
    expect(mail.text).toContain("marie@example.com");
    expect(mail.text).toContain("Mazout (huile)");
    expect(mail.replyTo).toBe("marie@example.com");
  });
});

describe("recordNotify", () => {
  beforeEach(() => sendAdminMail.mockClear());

  it("rejects an invalid email", async () => {
    const res = await recordNotify({ courriel: "nope" });
    expect(res).toEqual({ ok: false, error: expect.any(String) });
    expect(sendAdminMail).not.toHaveBeenCalled();
  });

  it("emails the admin the waitlist address", async () => {
    const res = await recordNotify({ courriel: "ok@example.com" });
    expect(res).toEqual({ ok: true });
    expect(sendAdminMail).toHaveBeenCalledTimes(1);
    expect(sendAdminMail.mock.calls[0]![0].replyTo).toBe("ok@example.com");
  });
});
