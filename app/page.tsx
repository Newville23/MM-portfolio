import Container from "./components/container";
import Contact from "./components/home/contact";
import Hero from "./components/home/hero";
import Cover from "./components/project/cover";
import {PROJECTS} from "./api/projects"

export default function Page() {
  return (
    <div className="max-h-screen overflow-y-scroll snap-y snap-mandatory">
        <Hero />
        {PROJECTS.map((project) => (
          <Cover {...project} />
        ))}
        <Contact />
    </div>
  );
}
