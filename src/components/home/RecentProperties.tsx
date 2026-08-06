import PropertyCard from "../properties/PropertyCard";
import { getRecentProperties } from "@/server-actions/getRecentProperties";
import EmptyState from "../ui/EmptyState";
import { Suspense } from "react";
import CardSkeleton from "../skeletons/CardSkeleton";

async function Properties() {
  const recentProperties = await getRecentProperties();
  if(recentProperties?.length === 0){
    return <EmptyState title="No Recent Properties Found !"/>
  }else{
    return recentProperties?.map((property) => (
      <PropertyCard key={property.id} property={property} />
    ));
  }
}

export default function RecentProperties() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* header */}
        <div className="max-w-2xl">
          <p className="mb-5 uppercase text-primary font-semibold tracking-wide">
            New Listings
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Discover Recently Added Properties
          </h2>
          <p className="mt-5 mb-10 text-primary">
            Browse the latest homes, apartments, villas, and investment
            opportunities added to our marketplace by trusted property owners
            and agents.
          </p>
        </div>

        {/* properties grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <Suspense fallback={<CardSkeleton/>}>
            <Properties />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
