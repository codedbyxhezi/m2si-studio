import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://m2si-studio.vercel.app"),

  title: {
    default: "M²SI Studio — Webentwicklung & Design",
    template: "%s — M²SI Studio",
  },

  description:
    "M²SI Studio entwickelt individuelle, responsive Websites und digitale Erlebnisse mit modernem Design und sauberem Code.",

  keywords: [
    "M²SI Studio",
    "Fullstack Webdeveloper",
    "Webdesigner",
    "Webentwicklung",
    "Next.js",
    "TypeScript",
    "Responsive Webdesign",
    "Frontend Entwicklung",
  ],

  authors: [
    {
      name: "M²SI Studio",
    },
  ],

  creator: "M²SI Studio",
  publisher: "M²SI Studio",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "M²SI Studio",
    title: "M²SI Studio — Webentwicklung & Design",
    description:
      "Individuelle Websites, moderne Webentwicklung und hochwertiges digitales Design.",
    url: "https://m2si-studio.vercel.app",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M²SI Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "M²SI Studio — Webentwicklung & Design",
    description:
      "Individuelle Websites, moderne Webentwicklung und hochwertiges digitales Design.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#120f0d",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body>

        <main>{children}</main>

      </body>
    </html>
  );
}