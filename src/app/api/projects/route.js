import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import { resolveDirectImageUrl } from "@/lib/imageResolver";

// Force Next.js App Router to disable API route caching and fetch dynamic data on every request
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    await dbConnect();

    // Query projects strictly from MongoDB Atlas collection 'projects'
    const rawProjects = await Project.find({})
      .sort({ featured: -1, createdAt: -1 })
      .lean();

    // Automatically resolve ImgBB viewer URLs to raw direct image links
    const projects = await Promise.all(
      (rawProjects || []).map(async (project) => {
        const rawUrl = project.thumbnail || project.image || "";
        const directUrl = await resolveDirectImageUrl(rawUrl);

        return {
          ...project,
          thumbnail: directUrl,
          image: directUrl,
        };
      })
    );

    return NextResponse.json(
      {
        success: true,
        count: projects.length,
        data: projects,
      },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("API GET /api/projects MongoDB error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Database error fetching projects from MongoDB Atlas",
        details: error.message,
        data: [],
      },
      { status: 500 }
    );
  }
}
