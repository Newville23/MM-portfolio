import Image from "next/image";
import Container from "../container";

export default function Overview({ projectData }) {
  const { name, tags, agency, image, technique } = projectData;

  return (
    <section className="relative smooth-section text-white">
      <Container>
        <div className="h-screen flex justify-start items-center">
          <div className="absolute inset-0 object-cover">
            <Image
              fill
              src={image.overview.lg}
              alt={`${projectData.title} overview image`}
            />
          </div>
          <div className="basis-80 pr-20 z-0">
            <div className="mb-4 ">
              <h2 className="uppercase font-light text-xs/tight">Tag</h2>
              {tags.map((tag, idx) => (
                <p
                  key={`$tag-${idx}`}
                  className="uppercase font-extrabold text-sm/tight"
                >
                  {tag}
                </p>
              ))}
            </div>
            <div className="mb-4">
              <h2 className="uppercase font-light text-xs/tight">Agencia</h2>
              <p className="uppercase font-extrabold text-sm/tight">{agency}</p>
            </div>
            <div className="mb-14">
              <h2 className="font-light text-xs">Técnica</h2>
              {technique.map((item) => (
                <p key={`techniques-${item}`} className="font-light text-xs">
                  {item}
                </p>
              ))}
            </div>
            <div>
              <h3 className="uppercase font-extrabold text-xs">
                {projectData.title}
              </h3>
              <h4 className="uppercase font-extrabold text-xs">{`proyecto: ${name}`}</h4>
              <p className="font-light text-xs">{projectData.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
