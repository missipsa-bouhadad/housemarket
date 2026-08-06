import FrontendLayout from "@/components/layout/FrontendLayout";
import Navbar from "@/components/navbar/Navbar";
import { notFound } from "next/navigation";
import { MdOutlineBed } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiHouseLine } from "react-icons/pi";
import { PiBathtub } from "react-icons/pi";
import Image from "next/image";
import EmailForm from "@/components/properties/EmailForm";
import { getProperty } from "@/server-actions/getProperty";

interface PropertyPageProps {
  params: Promise<{ propertyId: string }>;
}


export default async function PropertyPage({ params }: PropertyPageProps) {
  const { propertyId } = await params;
  const property = await getProperty(propertyId)
  if (!property) {
    notFound();
  }
  return (
    <FrontendLayout>
      <Navbar variant="solid" />

      <section className="mx-auto max-w-7xl py-10 px-6 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
          {/* left */}
          <div className="flex flex-col">
            <p className="text-primary tracking-[0.15em] text-sm font-semibold uppercase w-fit p-2 rounded-2xl">
              {property.listingType === "sale" ? "For Sale" : "For Rent"}
            </p>

            <h1 className="mt-3 text-3xl lg:text-4xl font-bold">
              {property.title}
            </h1>

            {/* features */}
            <div className="flex flex-wrap gap-4 items-center mt-8">
              <div className="flex justify-center items-center px-4 py-2 rounded-2xl shadow-[0_0_5px_rgba(55,65,81,0.6)]">
                <span className="mr-2">
                  <FaLocationDot className="w-5 h-4" />
                </span>
                {property.location}
              </div>

              <div className="flex justify-center items-center px-4 py-2 rounded-2xl shadow-[0_0_5px_rgba(55,65,81,0.6)]">
                <span className="mr-2">
                  <PiHouseLine className="w-5 h-5" />
                </span>
                {property.area} sqft
              </div>

              <div className="flex justify-center items-center px-4 py-2 rounded-2xl shadow-[0_0_5px_rgba(55,65,81,0.6)]">
                <span className="mr-2">
                  <MdOutlineBed className="w-5 h-5" />
                </span>
                {property.bedrooms} Beds
              </div>

              <div className="flex justify-center items-center px-4 py-2 rounded-2xl shadow-[0_0_5px_rgba(55,65,81,0.6)]">
                <span className="mr-2">
                  <PiBathtub className="w-5 h-5" />
                </span>
                {property.bedrooms} Baths
              </div>
            </div>
          </div>

          {/* right (price) */}
          <div className="flex flex-col items-center text-primary border border-primary/20 p-2 lg:p-4 rounded-2xl text-3xl lg:text-4xl font-bold shadow-[0_0_5px_rgba(55,65,81,0.6)]">
            {property.listingType === "rent" ? (
              <h3>
                {property.price.toLocaleString()} €
                <span className="font-medium text-sm text-white/60">
                  /Month
                </span>
              </h3>
            ) : (
              <h3>{property.price.toLocaleString()} €</h3>
            )}
          </div>
        </div>

        {/* image */}
        <div className="relative w-full h-60 md:h-100 lg:h-140 my-10">
          <Image
            src={property.image}
            alt={"proprety"}
            fill
            className="object-cover object-center rounded-2xl shadow-[0_0_20px_rgba(55,65,81,0.6)]"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* left */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-2">About This Property</h2>
            <p className="">{property.description}</p>
          </div>

          {/* right */}
          <EmailForm />
        </div>
      </section>
    </FrontendLayout>
  );
}
