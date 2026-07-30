import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

function getSiteUrl() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000";

  const normalizedUrl = url.startsWith("http")
    ? url
    : `https://${url}`;

  return normalizedUrl.replace(/\/$/, "");
}

const siteUrl = getSiteUrl();

const defaultTitle =
  "M²SI Studio | Fullstack Webdeveloper & Designer";

const description =
  "M²SI Studio entwickelt hochwertige Websites und digitale Produkte mit Next.js, TypeScript, UX/UI Design und responsiver Fullstack-Entwicklung.";

const isPreviewDeployment =
  process.env.VERCEL_ENV === "preview";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: defaultTitle,
  description,

  applicationName: "M²SI Studio",

  keywords: [
    "Webdesign",
    "Webentwicklung",
    "Fullstack Webdeveloper",
    "UX/UI Design",
    "Next.js Entwickler",
    "TypeScript Entwickler",
    "Responsive Webdesign",
    "Frontend Entwicklung",
    "Websites",
    "M²SI Studio",
  ],

  authors: [
    {
      name: "M²SI Studio",
      url: siteUrl,
    },
  ],

  creator: "M²SI Studio",
  publisher: "M²SI Studio",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "M²SI Studio",
    title: defaultTitle,
    description,
    images: [
      {
        url: "/images/editorial/hero-cinematic.webp",
        width: 1672,
        height: 941,
        alt: "M²SI Studio – Fullstack Webdevelopment und Design",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description,
    images: ["/images/editorial/hero-cinematic.webp"],
  },

  robots: isPreviewDeployment
    ? {
        index: false,
        follow: false,
        noarchive: true,
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: false,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#120f0d",
  colorScheme: "light dark",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}