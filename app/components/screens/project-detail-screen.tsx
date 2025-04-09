"use client";

import { PROJECTS } from "app/api/projects";
import Cover from "../project/cover";
import MediaFold from "../project/mediaFold";
import Overview from "../project/overview";

type ProjectDetailScreenProps = {
  projectSlug: string;
};

export function ProjectDetailScreen({ projectSlug }: ProjectDetailScreenProps) {
  const projectData = PROJECTS.find(({ slug }) => slug === projectSlug);

  if (!projectData) {
    return <div>No project with that data</div>;
  }
  
  const { image, title } = projectData;
  
  return (
    <div className="smooth-container bg-black">
      <Cover {...projectData} />
      <Overview projectData={projectData} />
      {image?.media?.map((media, idx) => (
        <MediaFold key={`media-${idx}`} title={title} mediaURL={media.url} />
      ))}
    </div>
  );
} 