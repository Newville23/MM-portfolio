"use client";
import Container from "./container";
import { useNavTheme } from "app/providers/navTheme";
import { motion } from "motion/react";
export default function Footer() {
  const { navTheme } = useNavTheme();
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed bottom-14 w-full z-10 transition-all duration-300 ${
        navTheme === "dark" ? "text-black" : "text-yellow-500"
      }`}
    >
      <Container>
        <div className="uppercase tracking-[0.2rem] text-[0.5rem] flex justify-between">
          <p>matteo manini / graphic designer & art director</p>
          <p>portfolio</p>
        </div>
      </Container>
    </motion.footer>
  );
}
