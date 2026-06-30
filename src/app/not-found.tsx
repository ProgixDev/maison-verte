import { CtaLink } from "@/components/ui/cta-link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-haze font-mono text-sm">404</p>
      <h1 className="text-pine font-serif text-3xl tracking-tight">Cette page est introuvable.</h1>
      <p className="text-moss max-w-prose">
        La page que vous cherchez n’existe pas ou a peut-être été déplacée.
      </p>
      <CtaLink href="/" className="mt-2">
        Retour à l’accueil
      </CtaLink>
    </main>
  );
}
