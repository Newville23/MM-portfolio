import { heatherFont } from "app/lib/fonts";

export default function Loading() {
  return (
    <div className="smooth-container bg-black">
      {/* Cover Section Skeleton */}
      <section className="smooth-section text-center bg-black">
        <div className="flex flex-col justify-start h-full relative">
          <div className="mt-28 -mb-1.5 h-4 w-32 bg-yellow-500/20 animate-pulse rounded" />
          <div className={`h-[340px] w-[600px] bg-yellow-500/20 animate-pulse rounded ${heatherFont.className}`} />
          <div className="relative mt-14">
            <div className="h-[300px] w-[350px] bg-yellow-500/20 animate-pulse rounded mx-auto" />
          </div>
        </div>
      </section>

      {/* Overview Section Skeleton */}
      <section className="relative smooth-section text-white">
        <div className="w-full px-16">
          <div className="h-screen flex justify-start items-center">
            <div className="absolute inset-0 bg-yellow-500/10 animate-pulse" />
            <div className="basis-80 pr-20 z-0">
              <div className="mb-4">
                <div className="h-3 w-16 bg-white/20 animate-pulse rounded mb-2" />
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-white/20 animate-pulse rounded" />
                  <div className="h-4 w-32 bg-white/20 animate-pulse rounded" />
                </div>
              </div>
              <div className="mb-4">
                <div className="h-3 w-16 bg-white/20 animate-pulse rounded mb-2" />
                <div className="h-4 w-32 bg-white/20 animate-pulse rounded" />
              </div>
              <div className="mb-14">
                <div className="h-3 w-16 bg-white/20 animate-pulse rounded mb-2" />
                <div className="space-y-2">
                  <div className="h-3 w-24 bg-white/20 animate-pulse rounded" />
                  <div className="h-3 w-28 bg-white/20 animate-pulse rounded" />
                </div>
              </div>
              <div>
                <div className="h-4 w-40 bg-white/20 animate-pulse rounded mb-2" />
                <div className="h-4 w-32 bg-white/20 animate-pulse rounded mb-2" />
                <div className="h-12 w-full bg-white/20 animate-pulse rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Fold Skeleton */}
      <section className="relative smooth-section h-screen">
        <div className="absolute inset-0 bg-yellow-500/10 animate-pulse" />
      </section>
    </div>
  );
} 