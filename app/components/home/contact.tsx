"use client";
import { useEffect, useRef } from "react";
import { heatherFont } from "../../lib/fonts";
import { useNavTheme } from "app/providers/navTheme";
import { useInView } from "motion/react";

export default function Contact() {
  const { setNavTheme } = useNavTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 });

  useEffect(() => {
    if (isInView) {
      setNavTheme("dark");
    }
  }, [isInView]);

  return (
    <section id="contact" ref={ref} className="snap-start text-center h-screen">
      <div className="flex flex-col justify-center h-full">
        <h2 className={`mb-8 title text-8xl ${heatherFont.className}`}>contact</h2>
        <div className="uppercase tracking-[0.2rem] text-sm font-bold leading-7">
          <p>matteo manini</p>
          <p>córdoba (españa)</p>
          <p>+34 643 330 687</p>
          <p>MTTMANINI@GMAIL.COM</p>
        </div>
      </div>
    </section>
  );
}
