"use client"
import { useEffect, useRef } from "react";
import { heatherFont } from "../../lib/fonts";
import { useNavTheme } from "app/providers/navTheme";
import { useInView } from "motion/react";

export default function Hero() {
  const { setNavTheme } = useNavTheme();
  const ref = useRef(null);
  const isInView = useInView(ref,{amount:0.7});

  useEffect(() => {
    if (isInView) {
      setNavTheme("dark");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="snap-start text-center h-screen">
      <div className="flex flex-col justify-center h-full">
        <h1 className={`mb-8 title ${heatherFont.className}`}>
          Hola soy Matteo,
          <br /> Graphic Designer & Art Director
        </h1>
        <p className="uppercase tracking-[0.2rem] text-sm font-bold max-w-3xl mx-auto leading-7">
          {`creativo con más de 10 años de experiencia especializado en el packaging design y brand design.
  con enfoque y pasion por el mundo de los vinos y aceites. poner texto sobre mis skills: brand guideline,
  food, beverage, ideas creativas.`}
        </p>
      </div>
    </div>
  );
}
