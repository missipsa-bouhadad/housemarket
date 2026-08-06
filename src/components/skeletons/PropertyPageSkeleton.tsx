import FrontendLayout from "@/components/layout/FrontendLayout";

export default function PropertyPageSkeleton() {
  return (
    <FrontendLayout>
      <section className="mx-auto max-w-7xl py-10 px-6 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
          {/* left */}
          <div className="flex flex-col">
            {/* listing type */}
            <div className="h-7 w-24 bg-black/5 animate-pulse rounded-2xl" />

            {/* title */}
            <div className="mt-3 space-y-3">
              <div className="h-10 w-3/4 bg-black/5 animate-pulse rounded-2xl" />
              <div className="h-10 w-1/2 bg-black/5 animate-pulse rounded-2xl" />
            </div>

            {/* features */}
            <div className="flex flex-wrap gap-4 items-center mt-8">
              <div className="h-10 w-32 bg-black/5 animate-pulse rounded-2xl" />
              <div className="h-10 w-28 bg-black/5 animate-pulse rounded-2xl" />
              <div className="h-10 w-24 bg-black/5 animate-pulse rounded-2xl" />
              <div className="h-10 w-24 bg-black/5 animate-pulse rounded-2xl" />
            </div>
          </div>

          {/* right (price) */}
          <div className="flex flex-col items-center border border-primary/20 p-2 lg:p-4 rounded-2xl shadow-[0_0_5px_rgba(55,65,81,0.6)] min-w-60">
            <div className="h-10 w-15 bg-black/5 animate-pulse rounded-2xl" />
          </div>
        </div>

        {/* image */}
        <div className="w-full h-60 md:h-100 lg:h-140 my-10 bg-black/5 animate-pulse rounded-2xl" />

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* left */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-2xl space-y-4">
            <div className="h-7 w-48 bg-black/5 animate-pulse rounded-2xl" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-black/5 animate-pulse rounded-2xl" />
              <div className="h-4 w-full bg-black/5 animate-pulse rounded-2xl" />
              <div className="h-4 w-11/12 bg-black/5 animate-pulse rounded-2xl" />
              <div className="h-4 w-10/12 bg-black/5 animate-pulse rounded-2xl" />
              <div className="h-4 w-9/12 bg-black/5 animate-pulse rounded-2xl" />
            </div>
          </div>

          {/* right */}
          <div className="bg-white p-6 rounded-2xl shadow-2xl space-y-4">
            <div className="h-6 w-40 bg-black/5 animate-pulse rounded-2xl" />
            <div className="h-11 w-full bg-black/5 animate-pulse rounded-2xl" />
            <div className="h-11 w-full bg-black/5 animate-pulse rounded-2xl" />
            <div className="h-11 w-full bg-black/5 animate-pulse rounded-2xl" />
            <div className="h-11 w-full bg-black/5 animate-pulse rounded-2xl" />
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}
