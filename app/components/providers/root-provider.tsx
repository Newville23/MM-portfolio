
"use client"
import { NavThemeProvider } from "app/providers/navTheme";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootProvider({ children }: { children: React.ReactNode }) {
  return(
  <NavThemeProvider>
    {children}
  <SpeedInsights />
</NavThemeProvider>)
}
