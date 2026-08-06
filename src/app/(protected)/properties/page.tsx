import FrontendLayout from "@/components/layout/FrontendLayout";
import Navbar from "@/components/navbar/Navbar";
import PropertyCard from "@/components/properties/PropertyCard";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import EmptyState from "@/components/ui/EmptyState";
import { getUserProperties } from "@/server-actions/getUserProperties";
import { Suspense } from "react";

async function Properties() {
  const properties = await getUserProperties();
  if(properties?.length === 0){
    return <EmptyState title="No Properties Found !"/>
  } else {
    return properties?.map((property) => (
      <PropertyCard key={property.id} property={property} />
    ));
  }
}

export default function page() {
  return (
    <FrontendLayout>
      <Navbar variant="solid" />
      <section className="mx-auto max-w-7xl p-6 lg:px-12 w-full">
        {/* header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-primary text-2xl">Properties</h2>
        </div>

        {/* properties grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Suspense fallback={<CardSkeleton/>}>
            <Properties />
          </Suspense>
        </div>
      </section>
    </FrontendLayout>
  );
}
