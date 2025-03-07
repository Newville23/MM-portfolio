import Contact from "./components/home/contact";
import Hero from "./components/home/hero";
import Cover from "./components/project/cover";
import {PROJECTS} from "./api/projects"

export default function Page({sectionRefs}:{sectionRefs: any}) {
  return (
    <div className="max-h-screen overflow-y-scroll snap-y snap-mandatory">
          <Hero />
        {PROJECTS.map((project, idx) => (
          <Cover key={idx} {...project} />
        ))}
        <Contact />
    </div>
  );
}
