import { PROJECTS } from "app/api/projects";
import Container from "app/components/container";
import Cover from "app/components/project/cover";
import MediaFold from "app/components/project/mediaFold";
import Overview from "app/components/project/overview";

type Params = Promise<{ slug: string }>;
export default async function Project({ params }: { params: Params }) {
  const projectSlug = (await params).slug;
  const projectData = PROJECTS.find(({ slug }) => slug === projectSlug);

  if (!projectData) {
    return <div>No project with that data</div>;
  }
const {image, title}= projectData;
  return (
    <div className="smooth-container bg-black">
        <Cover {...projectData} />
        <Overview projectData={projectData}/>
        {image?.media?.map((media) => <MediaFold title={title} mediaURL={media.url}/>)}
    </div>
  );
}
