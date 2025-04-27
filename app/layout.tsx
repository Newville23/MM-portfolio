import "./global.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import { baseUrl } from "./sitemap";
import RootProvider from "./components/providers/root-provider";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/footer";
import { Navbar } from "./components/nav";
import PageTransitionOverlay from "./components/pageTransitionOverlay";

const geist = Geist({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-geist",
});

const heatherFont = localFont({
  src: "../fonts/Heathergreen.woff",
  variable:"--font-heather"
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Matteo Manini Portfolio",
    template: "Matteo Manini Portfolio",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "Matteo Manini Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "Matteo Manini Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "scroll-smooth text-black bg-white dark:text-black dark:bg-yellow-500",
        geist.variable,
        heatherFont.variable
      )}
    >
      <body className="antialiased">
        <main className="relative flex-auto min-w-0 flex flex-col px-0">
          <PageTransitionOverlay/>
          <RootProvider>
            <Navbar />
            {children}
            <Footer />
            <Analytics />
          </RootProvider>
        </main>
      </body>
    </html>
  );
}
