"use client";
import { useEffect, useRef } from "react";
import { heatherFont } from "../../lib/fonts";
import { useNavTheme } from "app/providers/navTheme";
import { useInView } from "motion/react";
import Image from "next/image";

const HERO_DATA = {
  media:{url:"/projects/recetario-cover.jpg"},
  title: `Hola soy Matteo,
          Graphic Designer & Art Director`,
  subTitle: `CREATIVO CON MÁS DE 10 AÑOS DE EXPERIENCIA ESPECIALIZADO EN EL PACKAGING DESIGN Y BRAND DESIGN, CON ENFOQUE Y PASIÓN POR EL MUNDO DE LOS VINOS, ACEITES.
DESARROLLO BRAND GUIDELINE, LOGOTIPOS, ETIQUETAS, PACKAGING, CORPORATE IDENTITY.`,
};

export default function Hero() {
  const { setNavTheme } = useNavTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 });

  useEffect(() => {
    if (isInView) {
      setNavTheme("dark");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative snap-start text-center h-screen bg-amber-900">
      <div className="absolute inset-0 object-cover">
        <Image fill src={HERO_DATA.media.url} alt="Hero image" />
      </div>
      <div className="flex justify-start h-full">
        <div className="h-full text-left pl-20 pr-10 basis-[30%] bg-amber-400 flex flex-col justify-center opacity-85">
          <h1
            className={`mb-8 text-5xl font-medium leading-[1] uppercase tracking-widest ${heatherFont.className}`}
          >
            {HERO_DATA.title}
          </h1>
          <p className="uppercase tracking-widest text-[0.65rem] font-bold mx-auto">
            {HERO_DATA.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
