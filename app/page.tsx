import Container from "./components/container";
import Contact from "./components/home/contact";
import Hero from "./components/home/hero";
import Cover from "./components/project/cover";

const PROJECTS = [
  {
    name: "ximenium",
    category: "packaging design",
    image: {
      desktop: {
        url: "/projects/ximenium-cover.png",
        height: 300,
        width: 350,
      },
    },
  },
  {
    name: "deseo",
    category: "packaging design",
    image: {
      desktop: {
        url: "/projects/deseo-cover.png",
        height: 300,
        width: 1000,
      },
    },
  },
];

export default function Page() {
  return (
    <div className="max-h-screen overflow-y-scroll snap-y snap-mandatory">
      <Container>
        <Hero />
        {PROJECTS.map((project) => (
          <Cover {...project} />
        ))}
        <Contact />
      </Container>
    </div>
  );
}
