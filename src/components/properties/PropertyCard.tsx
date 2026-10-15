import { Property } from "@/types/property";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import DeletePropertyButton from "./DeletePropertyButton";

interface PropertyCardProps {
  property: Property;
  canDelete?: boolean;
}

export default function PropertyCard({
  property,
  canDelete = false,
}: PropertyCardProps) {
  return (
    <div className="relative">
      {canDelete && (
        <DeletePropertyButton
          propertyId={property.id}
          propertyTitle={property.title}
        />
      )}
      <Link
        href={`/property/${property.id}`}
        className="group relative block h-120 overflow-hidden rounded-4xl"
      >
        <div className="relative h-full w-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="inset-0 object-cover group-hover:scale-110 transition-all duration-300"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/25 to-transparent" />

          {/* badge */}
          <div className="absolute top-4 left-4 rounded-full z-20 bg-white/70 px-3 py-1">
            <span className="font-semibold text-primary">
              {property.listingType === "sale" ? "For Sale" : "For Rent"}
            </span>
          </div>

          {/* location and type */}

          <div className="absolute top-24 left-4 right-4 z-20 rounded-2xl backdrop-blur-2xl bg-white/10 px-4 py-2">
            <div className="flex items-start justify-between">
              <p className="flex items-center text-white/80">
                <FaMapMarkerAlt className="h-4 w-4 mr-2" />
                {property.location}
              </p>
              <div className="text-white rounded-xl bg-primary px-2 py-1">
                {property.propertyType}
              </div>
            </div>
          </div>

          {/* title and  features*/}

          <div className="absolute top-44 left-4 right-4 z-20 rounded-2xl backdrop-blur-2xl bg-white/10 px-4 py-2">
            <div className="flex flex-col ">
              <div className="flex items-start border-b border-white">
                <h1 className="mb-2 text-white/90 text-xl font-medium">
                  {property.title}
                </h1>
              </div>

              {/* features */}
              <div className="flex mt-4 gap-2 items-center justify-center text-white/90">
                <div className="flex justify-center items-center px-4 py-2 rounded-2xl bg-white/10">
                  {property.bedrooms} Beds
                </div>

                <div className="flex justify-center items-center px-4 py-2 rounded-2xl bg-white/10">
                  {property.bathrooms} Baths
                </div>

                <div className="flex justify-center items-center px-4 py-2 rounded-2xl bg-white/10">
                  {property.area} sqft
                </div>
              </div>
            </div>
          </div>

          {/* price */}
          <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl backdrop-blur-2xl bg-white/10 px-4 py-2 w-fit">
            <div className="flex items-start">
              {property.listingType === "rent" ? (
                <h3 className=" text-white text-3xl font-semibold">
                  {property.price.toLocaleString()} €
                  <span className="font-medium text-sm text-white/60">
                    /Month
                  </span>
                </h3>
              ) : (
                <h3 className=" text-white text-3xl font-semibold">
                  {property.price.toLocaleString()} €
                </h3>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
