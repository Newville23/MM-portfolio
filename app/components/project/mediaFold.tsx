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
      <div className="absolute inset-0 object-cover">
        <Image fill src={mediaURL} alt={`${title} overview image`} />
      </div>
    </section>
  );
}
