"use client";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import { heatherFont } from "../../lib/fonts";
import Image from "next/image";
import { useNavTheme } from "app/providers/navTheme";
import * as motion from "motion/react-client"


export default function Cover({
  category,
  name,
  image,
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
      className="smooth-section text-center bg-black"
    >
      <div className="flex flex-col justify-start h-full relative">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <p className={`mt-28 -mb-1.5 sub-title text-yellow-500`}>{category}</p>
          <h2
            className={`uppercase text-[340px] leading-[0.9] text-yellow-500 ${heatherFont.className}`}
          >
            {name}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            opacity: { duration: 0.4 },
            scale: { duration: 0.6 }
          }}
          className="project-img"
        >
          <Image
            src={image.desktop.url}
            alt={name}
            width={image.desktop.width}
            height={image.desktop.height}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
