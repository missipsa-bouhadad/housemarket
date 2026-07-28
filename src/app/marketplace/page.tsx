import FrontendLayout from '@/components/layout/FrontendLayout'
import Navbar from '@/components/navbar/Navbar'
import PropertyCard from '@/components/properties/PropertyCard';
import Button from '@/components/ui/Button'
import { propreties } from '@/constants/dummyPropreties';
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

export default function MarketPlace() {
  return (
    <FrontendLayout>
      <Navbar variant="solid" />
      <section className="mx-auto max-w-7xl p-6 lg:px-12 w-full">
        {/* header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-primary text-2xl">Explore</h2>
          <Button variant='outline' icon={<HiAdjustmentsHorizontal />}>Filter</Button>
        </div>

        {/* propreties grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propreties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </FrontendLayout>
  );
}
