import FrontendLayout from "@/components/layout/FrontendLayout";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <FrontendLayout>
      <Navbar variant="transparent"/>

      <section className="relative flex min-h-screen items-center pt-32 py-2 overflow-hidden bg-cover bg-center bg-[url('/images/house_cover.png')]">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/30 via-slate-900/10 to-transparent" />
      </section>

    </FrontendLayout>
  );
}
