import FrontendLayout from "@/components/layout/FrontendLayout";
import FilterButton from "@/components/marketplace/FilterButton";
import Navbar from "@/components/navbar/Navbar";
import PropertyCard from "@/components/properties/PropertyCard";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
import EmptyState from "@/components/ui/EmptyState";
import { getAllProperties } from "@/server-actions/getAllProperties";
import { Property } from "@/types/property";
import { Suspense } from "react";

interface SearchParams {
  search?: string;
  propertyType?: string;
  location?: string;
  address?: string;
  minPrice?: number;
  maxPrice?: number;
}

interface MarketPageProps {
  searchParams: Promise<SearchParams>;
}

interface MarketPlaceProps {
  searchParams: SearchParams;
}

async function MarketPlace({ searchParams }: MarketPlaceProps) {
  const properties: Property[] = await getAllProperties({
    search: searchParams.search,
    propertyType: searchParams.propertyType,
    location: searchParams.location,
    address: searchParams.address,
    minPrice: searchParams.minPrice,
    maxPrice: searchParams.maxPrice,
  });

  if (properties.length === 0) {
    return <EmptyState title="No Matching Properties !" filter />;
  }

  return (
    <>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </>
  );
}

export default async function page({ searchParams }: MarketPageProps) {
  const params = await searchParams;
  return (
    <FrontendLayout>
      <Navbar variant="solid" />
      <section className="mx-auto max-w-7xl p-6 lg:px-12 w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-primary text-2xl">Explore</h2>
          <FilterButton />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Suspense fallback={<CardSkeleton />}>
            <MarketPlace searchParams={params} />
          </Suspense>
        </div>
      </section>
    </FrontendLayout>
  );
}
