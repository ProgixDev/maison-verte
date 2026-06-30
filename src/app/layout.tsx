import type { Metadata } from "next";
import { DM_Serif_Display, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import { MotionProvider } from "@/components/motion";
import { site } from "@/core/site";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: `${site.name} — Subventions chauffage au Québec`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
    locale: site.locale,
    images: [{ url: "/brand-square.jpg", width: 1024, height: 1024, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/brand-square.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/brand-square.jpg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    areaServed: "QC",
  };

  return (
    <html lang="fr-CA" suppressHydrationWarning>
      <body
        className={`${hanken.variable} ${dmSerif.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          // JSON-LD is static, app-controlled data — safe to inline.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
