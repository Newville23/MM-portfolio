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
      <div className="flex flex-col justify-center h-full relative px-4 md:px-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 1.2
          }}
        >
          <p className={`-mb-1.5 sub-title text-yellow-500`}>{category}</p>
          <h2
            className={`uppercase text-[180px] md:text-[340px] leading-[0.9] text-yellow-500 ${heatherFont.className}`}
          >
            {name}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{
            ease: "easeIn",
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
            delay: 1.2
          }}
          className="project-img mt-4 md:mt-8"
        >
          <Image
            src={image.desktop.url}
            alt={name}
            width={image.desktop.width}
            height={image.desktop.height}
            className="h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
