export function SkeletonCard() {
  return (
    <div className="rounded-lg border border-white/10 bg-card overflow-hidden animate-pulse">
      <div className="aspect-[4/3] bg-white/5" />
      <div className="p-4 space-y-2">
        <div className="h-4 bg-white/10 rounded w-3/4" />
        <div className="h-3 bg-white/5 rounded w-full" />
        <div className="h-8 bg-white/5 rounded mt-2" />
      </div>
    </div>
  );
}
