"use client";

/**
 * Root error boundary — catches errors in the root layout itself, so it must
 * render its own <html>/<body>. Keep it dependency-light. Wire your error
 * tracker's capture here (e.g. Sentry.captureException(error)).
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr-CA">
      <body className="font-sans antialiased">
        <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">Une erreur est survenue.</h1>
          <p className="max-w-prose text-neutral-600">
            Un problème inattendu s’est produit. Vous pouvez réessayer ou revenir à l’accueil.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-2 inline-flex h-9 items-center rounded-full bg-[#123d2b] px-5 text-sm font-bold text-[#f3f7e7]"
          >
            Réessayer
          </button>
        </main>
      </body>
    </html>
  );
}
