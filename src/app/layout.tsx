import type { Metadata } from "next";
// import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Daniel Ezekiel — Full-Stack Developer | GreenTech · RegTech · FinTech",
  description:
    "Full-Stack Developer building privacy-preserving web applications for GreenTech, RegTech, and civic tech. MSc IT student at UWS. React, TypeScript, Next.js, Node.js, Python.",
  applicationName: "Daniel Ezekiel Portfolio website",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Daniel Ezekiel",
    "Daniel Boluwatife Ezekiel",
    "Daniel Ezekiel Portfolio",
    "Daniel Ezekiel Full-Stack Developer",
    "Full-Stack Developer",
    "GreenTech",
    "RegTech",
    "Privacy Engineering",
    "Scottish Tech Army",
    "UWS",
  ],
  creator: "Daniel Boluwatife Ezekiel",

  metadataBase: new URL("https://danielezekiel.vercel.app"),
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    // nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },

  openGraph: {
    title: "Daniel Ezekiel — Full-Stack Developer | GreenTech · RegTech · FinTech",
    description:
      "Full-Stack Developer building privacy-preserving web applications for GreenTech, RegTech, and civic tech. MSc IT student at UWS. React, TypeScript, Next.js, Node.js, Python.",
    url: "https://danielezekiel.vercel.app",
    siteName: "Daniel Ezekiel - Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1280,
        height: 720,
      },
      {
        url: "/images/og-image.png",
        width: 1920,
        height: 1080,
        alt: "Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Daniel Ezekiel — Full-Stack Developer",
    description:
      "Daniel Ezekiel is a Frontend Developer who specializes in passionately delivering characteristic web solutions and experiences with code.",
    // siteId: '1467726470533754880',
    creator: "@db_ezekiel",
    // creatorId: '1467726470533754880',
    images: ["https://danielezekiel.vercel.app/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-inter text-base">{children}</body>
    </html>
  );
}
