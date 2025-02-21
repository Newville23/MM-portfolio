import { heatherFont } from "../../lib/fonts";
import Image from "next/image";

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
  return (
    <section className="smooth-section text-center bg-black">
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
