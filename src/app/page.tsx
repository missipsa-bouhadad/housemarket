import RecentProperties from "@/components/home/RecentProperties";
import SearchBox from "@/components/home/SearchBox";
import FrontendLayout from "@/components/layout/FrontendLayout";
import Navbar from "@/components/navbar/Navbar";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  return (
    <FrontendLayout>
      <Navbar variant="transparent" />

      <section className="relative flex min-h-screen items-center pt-32 py-2 overflow-hidden bg-cover bg-center bg-[url('/images/house_cover.png')]">
        {/* overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/70 via-slate-900/40 to-slate-900/10" />

        {/* gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/30 via-slate-900/10 to-transparent" />

        {/* content */}
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="max-w-3xl">
              {/* badge */}
              <div className="inline-flex items-center backdrop-blur-2xl px-5 py-2 gap-2 mb-6 bg-white/80 rounded-2xl border border-primary/45 ">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-primary font-medium tracking-wide ">
                  Where House Hunting Gets Easy
                </span>
              </div>

              {/* heading */}
              <div className="w-fit rounded-2xl bg-slate-950/60 backdrop-blur-md px-8 py-6 mt-5">
                <h1 className="text-4xl font-bold text-white/90 tracking-tight">
                  Your Next Home Starts Here
                </h1>

                <p className="mt-5 max-w-2xl leading-relaxed text-lg text-white/80">
                  Discover luxury apartments, modern homes, and premium
                  properties in the best locations around the world.
                </p>

                <SearchBox />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RecentProperties />
    </FrontendLayout>
  );
}
