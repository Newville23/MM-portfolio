import Image from "next/image";

export default function MediaFold({
  mediaURL,
  title,
}: {
  title: string;
  mediaURL: string;
}) {
  return (
    <section className="relative smooth-section h-screen">
      <div className="absolute inset-0 px-4 md:px-0">
        <Image 
          fill 
          src={mediaURL} 
          alt={`${title} overview image`} 
          className="object-cover rounded-lg md:rounded-none"
        />
      </div>
    </section>
  );
}
