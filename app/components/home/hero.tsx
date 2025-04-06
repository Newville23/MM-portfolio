"use client";
import { useEffect, useRef } from "react";
import { heatherFont } from "../../lib/fonts";
import { useNavTheme } from "app/providers/navTheme";
import { useInView } from "motion/react";
import Image from "next/image";

const HERO_DATA = {
  media: {
    video: "/reel-portfolio-desktop.mp4",
    image: "/projects/recetario-cover.jpg"
  },
  title: `Hola soy Matteo,
          Graphic Designer & Art Director`,
  subTitle: `CREATIVO CON MÁS DE 10 AÑOS DE EXPERIENCIA ESPECIALIZADO EN EL PACKAGING DESIGN Y BRAND DESIGN, CON ENFOQUE Y PASIÓN POR EL MUNDO DE LOS VINOS, ACEITES.
DESARROLLO BRAND GUIDELINE, LOGOTIPOS, ETIQUETAS, PACKAGING, CORPORATE IDENTITY.`,
};

export default function Hero() {
  const { setNavTheme } = useNavTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isInView) {
      setNavTheme("dark");
      // Play video when in view
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log("Video autoplay failed:", error);
        });
      }
    } else {
      // Pause video when out of view
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative snap-start text-center h-screen bg-amber-900">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          muted
          loop
          poster={HERO_DATA.media.image}
        >
          <source src={HERO_DATA.media.video} type="video/mp4" />
          {/* Fallback Image */}
          <Image 
            fill 
            src={HERO_DATA.media.image} 
            alt="Hero image" 
            priority
          />
        </video>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col md:flex-row">
        {/* Desktop: Left side content */}
        <div className="hidden md:flex h-full text-left pl-20 pr-10 basis-[30%] bg-amber-400 flex-col justify-center opacity-85">
          <h1
            className={`mb-8 text-5xl font-medium leading-[1] uppercase tracking-widest ${heatherFont.className}`}
          >
            {HERO_DATA.title}
          </h1>
          <p className="uppercase tracking-widest text-[0.65rem] font-bold mx-auto">
            {HERO_DATA.subTitle}
          </p>
        </div>

        {/* Mobile: Bottom content */}
        <div className="md:hidden mt-auto p-6 bg-amber-400/85 backdrop-blur-sm">
          <h1
            className={`mb-4 text-3xl font-medium leading-[1] uppercase tracking-widest ${heatherFont.className}`}
          >
            {HERO_DATA.title}
          </h1>
          <p className="uppercase tracking-widest text-[0.65rem] font-bold">
            {HERO_DATA.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
