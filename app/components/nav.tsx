"use client"
import { motion } from "motion/react";
import Link from "next/link";
import Container from "./container";
import Logo from "./logo";
import { useNavTheme } from "app/providers/navTheme";
const navItems = {
  "/projects": {
    name: "work",
  },
  "/#contact": {
    name: "contact",
  },
};

export function Navbar() {
  const { navTheme } = useNavTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`top-10 z-40 fixed left-0 w-full transition-all duration-300 ${
        navTheme === "dark"
          ? "text-black"
          : "text-yellow-500"
      }`}
    >
      <Container>
        <nav
          className="flex items-center flex-row justify-between relative pb-0 fade md:overflow-hidden scroll-pr-6 md:relative"
          id="nav"
        >
          <div>
            <Link
              href={"/"}
              className={`font-heather transition-all uppercase text-5xl`}
            >
              <Logo color={navTheme === "dark" ? "#000000" : "#ffffff"}/>
            </Link>
          </div>
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 uppercase tracking-[0.2rem] text-sm flex align-middle relative py-1 px-2 first:mr-14 font-extrabold"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </Container>
    </motion.div>
  );
}
