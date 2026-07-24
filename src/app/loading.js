import Spinner from "@/components/Spinner";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50/50 dark:bg-[#09090b]/50 transition-colors duration-300">
      <Spinner size="lg" text="Loading portfolio..." />
    </div>
  );
}
