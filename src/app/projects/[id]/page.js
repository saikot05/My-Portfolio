import Link from "next/link";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import ProjectDetailClient from "./ProjectDetailClient";
import { resolveDirectImageUrl } from "@/lib/imageResolver";

// Helper function to query a project document from MongoDB Atlas
async function getProjectById(id) {
  try {
    const conn = await dbConnect();
    if (conn) {
      const doc = await Project.findOne({
        $or: [{ projectId: id }, { id: id }],
      }).lean();

      if (doc) {
        const rawUrl = doc.thumbnail || doc.image || "";
        const directUrl = await resolveDirectImageUrl(rawUrl);

        // Serialize MongoDB document fields safely for Next.js Server Component props
        return {
          id: doc.projectId || doc.id || id,
          title: doc.title,
          shortDesc: doc.tagline || doc.shortDesc || "",
          description: doc.description || doc.tagline || "",
          image: directUrl,
          thumbnail: directUrl,
          techStack: doc.techStack || [],
          liveLink: doc.links?.live || doc.liveLink || "",
          githubLink: doc.links?.clientRepo || doc.githubLink || "",
          challenges: doc.challenges || doc.highlights || [],
          improvements: doc.improvements || [],
        };
      }
    }
  } catch (error) {
    console.error("Error fetching project from DB in ProjectDetailPage:", error);
  }

  return null;
}

export async function generateStaticParams() {
  try {
    const conn = await dbConnect();
    if (conn) {
      const projects = await Project.find({}, { projectId: 1, id: 1 }).lean();
      if (projects && projects.length > 0) {
        return projects.map((p) => ({
          id: p.projectId || p.id,
        }));
      }
    }
  } catch (err) {
    console.error("generateStaticParams MongoDB fetch error:", err);
  }

  return [
    { id: "auranex" },
    { id: "greenpulse-ai" },
    { id: "fundverse" },
    { id: "drivefleet" },
    { id: "suncart" },
  ];
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Md Saikot Islam Portfolio`,
    description: project.shortDesc || project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div className="glass-card p-10 max-w-md w-full border border-white/10">
          <h1 className="text-3xl font-extrabold text-white mb-3 font-[Outfit]">Project Not Found</h1>
          <p className="text-zinc-400 text-sm mb-6">The requested project ID &quot;{id}&quot; could not be retrieved from the database.</p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-all text-sm"
          >
            ← Back to All Projects
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}
