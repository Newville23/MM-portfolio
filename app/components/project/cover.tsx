"use client";
import { useInView } from "motion/react";
import { heatherFont } from "../../lib/fonts";
import Image from "next/image";
import { useNavTheme } from "app/providers/navTheme";
import { useEffect, useRef } from "react";

export default function Cover({
  category,
  name,
  image,
  onMouseEnter,
  onMouseLeave,
}: {
  category: string;
  name: string;
  image: {
    desktop: {
      url: string;
      width: number;
      height: number;
    };
  };
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const { setNavTheme } = useNavTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 });

  useEffect(() => {
    if (isInView) {
      setNavTheme("light");
    }
  }, [isInView]);

  return (
    <section 
      ref={ref} 
      className="smooth-section text-center bg-black cursor-none"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col justify-start h-full relative">
        <p className={`mt-28 -mb-1.5 sub-title text-yellow-500`}>{category}</p>
        <h2
          className={`uppercase text-[340px] leading-[0.9] text-yellow-500 ${heatherFont.className}`}
        >
          {name}
        </h2>
        <Image
          className="project-img"
          src={image.desktop.url}
          alt={name}
          width={image.desktop.width}
          height={image.desktop.height}
        />
      </div>
    </section>
  );
}
