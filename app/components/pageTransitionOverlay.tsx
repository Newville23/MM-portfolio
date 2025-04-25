"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const svgs = ["/m/matteo.svg", "/m/m1.svg", "/m/m2.svg", "/m/m3.svg"];

export default function PageTransitionOverlay() {
  const pathname = usePathname();
  const [showOverlay, setShowOverlay] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Delay to simulate loading and play animation
    const hideOverlay = setTimeout(() => {
      setShowOverlay(false);
    }, 1600);

    return () => clearTimeout(hideOverlay);
  }, [pathname]);

  // Loop through SVGs
  useEffect(() => {
    if (!showOverlay) return;
    const loop = setInterval(() => {
      setIndex((i) => (i + 1) % svgs.length);
    }, 400);
    return () => clearInterval(loop);
  }, [showOverlay]);

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        exit={{opacity: 0}}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
        >
              <motion.div
                className="absolute bg-yellow-500 h-full w-1/2 left-0 z-10"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeIn', delay: 1.2 }}
              />
              <motion.div
                className="absolute bg-yellow-500 h-full w-1/2 right-0 z-10"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeIn', delay: 1.2 }}
              />

          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={svgs[index]}
                src={svgs[index]}
                className="absolute w-full h-full object-contain"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
