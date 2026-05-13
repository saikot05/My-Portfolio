import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Md Saikot Islam Portfolio`,
    description: project.shortDesc,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-violet-400 hover:underline">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}
