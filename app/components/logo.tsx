import { useNavTheme } from "app/providers/navTheme";
import { motion } from "motion/react";
export default function Logo({ color = "#000000" }: { color?: string }) {
  const {navTheme} =useNavTheme()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="750 350 500 500"
      width="70"
      height="70"
    >
      <motion.path
        className={`transition-all duration-300 ${navTheme === "dark" ? "fill-black": "fill-amber-500"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        d="M1039.99 369.93 975.8 539.38l-61.24-169.44H796.15v55.26h44.61L824.9 710.07h61.68l9.52-224.96 60.08 149.42h35.67l62.47-147.65 8.82 223.19h60.71l-14.78-340.14z"
      />
    </svg>
  );
}
