import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    projectId: {
      type: String,
      required: [true, "Project ID is required"],
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },
    tagline: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
      default: "Full Stack",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    metrics: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    thumbnail: {
      type: String,
      required: [true, "Thumbnail image URL is required"],
    },
    techStack: {
      type: mongoose.Schema.Types.Mixed,
      default: [],
    },
    highlights: {
      type: [String],
      default: [],
    },
    links: {
      live: { type: String, default: "" },
      clientRepo: { type: String, default: "" },
      serverRepo: { type: String, default: "" },
    },
  },
  {
    collection: "projects",
    timestamps: true,
  }
);

// Prevent model overwrite error during HMR in Next.js
export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
