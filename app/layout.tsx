'use client'
import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { NavThemeProvider } from "./providers/navTheme";

/* export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Next.js Portfolio Starter",
    template: "%s | Next.js Portfolio Starter",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
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
 */
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
        GeistSans.variable
      )}
    >
      <body className="antialiased">
        <main className="relative flex-auto min-w-0 flex flex-col px-2 md:px-0">
          <NavThemeProvider>
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </NavThemeProvider>
        </main>
      </body>
    </html>
  );
}
