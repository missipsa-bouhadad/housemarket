import { propreties } from "@/constants/dummyPropreties";
import PropertyCard from "../properties/PropertyCard";


export default function () {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* header */}
        <div className="max-w-2xl">
          <p className="mb-5 uppercase text-primary font-semibold tracking-wide">
            New Listings
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Discover Recently Added Propreties
          </h2>
          <p className="mt-5 mb-10 text-primary">
            Browse the latest homes, apartments, villas, and investment
            opportunities added to our marketplace by trusted property owners
            and agents.
          </p>
        </div>

        {/* propreties grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {propreties.map((property)=>(
            <PropertyCard key={property.id} property={property}/>
          ))}
        </div>
      </div>
    </section>
  );
}
