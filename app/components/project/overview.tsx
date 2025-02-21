import Image from "next/image";
import Container from "../container";

export default function Overview({ projectData }) {
  const { tags, agency, image } = projectData;
  return (
    <section className="relative smooth-section text-white">
      <Container>
        <div className="h-screen flex justify-start items-center">
          <div className="absolute inset-0 object-cover">
            <Image
              fill
              src={image.media[0].url}
              alt={`${projectData.title} overview image`}
            />
          </div>
          <div className="basis-80 pr-20 z-0">
            <div>
              <h2 className="uppercase">Tag</h2>
              {tags.map((tag) => (
                <p>{tag}</p>
              ))}
            </div>
            <div>
              <h2 className="uppercase">Agencia</h2>
              <p>{agency}</p>
            </div>
            <div>
              <h3>{projectData.title}</h3>
              <p>{projectData.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
