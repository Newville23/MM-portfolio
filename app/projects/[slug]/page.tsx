import { ProjectDetailScreen } from "../../components/screens/project-detail-screen";

type Params = Promise<{ slug: string }>;

export default async function Project({ params }: { params: Params }) {
  const projectSlug = (await params).slug;
  return <ProjectDetailScreen projectSlug={projectSlug} />;
}
