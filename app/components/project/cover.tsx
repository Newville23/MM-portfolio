"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, useInView } from "motion/react";
import { heatherFont } from "../../lib/fonts";
import Image from "next/image";
import { useNavTheme } from "app/providers/navTheme";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Cover({
  slug,
  category,
  name,
  image,
}: {
  slug: string;
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
  const params = useParams();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 });
  const [linkHover, setLinkHover] = useState<boolean>(false);
  useEffect(() => {
    if (isInView) {
      setNavTheme("light");
    }
  }, [isInView]);

  return (
    <section ref={ref} className="smooth-section text-center bg-black">
      <div className="flex flex-col justify-center h-full relative px-4 md:px-0">
        {!params.slug && (<Link
          href={`/projects/${slug}`}
          className="group block"
          onMouseOver={() => setLinkHover(true)}
          onMouseLeave={() => setLinkHover(false)}
        >
          <motion.div
            className="absolute right-10 top-[50%] overflow-x-hidden h-8 flex items-center justify-center backdrop-blur-md bg-white/20 rounded-full px-3 py-1"
            initial={{ width: "36px" }}
            whileHover={{ width: "11rem" }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            {/* Animated Text */}
            <AnimatePresence>
              {linkHover && (<motion.span
                className="text-yellow-500 font-extrabold mr-2 uppercase tracking-[0.2rem] text-sm whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
                >
                View more
              </motion.span>)}
              </AnimatePresence>

            {/* Icon */}
            <span>
              <svg
                className="stroke-yellow-500 size-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </motion.div>
        </Link>)}

        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 1.2,
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
            delay: 1.2,
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
