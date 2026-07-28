import FrontendLayout from '@/components/layout/FrontendLayout'
import Navbar from '@/components/navbar/Navbar'
import PropertyCard from '@/components/properties/PropertyCard'
import { properties } from '@/constants/dummyProperties'
import React from 'react'

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
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </section>
        </FrontendLayout>
  )
}
