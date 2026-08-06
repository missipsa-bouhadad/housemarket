"use client";

import { useFilterModal } from "@/store/useFilterModal";
import Modal from "./Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import PropertyTypeCard from "../properties/PropertyTypeCard";
import { propertyTypes } from "@/constants/PropertyTypes";
import { PropertyType } from "@/types/propertyType";
import Input from "../ui/Input";

const STEPS = {
  TYPE: 0,
  LOCATION: 1,
  PRICE: 2,
};

export default function FilterModal() {
  const router = useRouter();
  const { isOpen, close } = useFilterModal();
  const [step, setStep] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState<PropertyType>();

  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const stepTitle = () => {
    switch (step) {
      case STEPS.TYPE:
        return "filter by property type";
      case STEPS.LOCATION:
        return "filter by location";
      case STEPS.PRICE:
        return "filter by propery price";
      default:
        break;
    }
  };

  const applyFilter = async () => {
    setLoading(true);
    const params = new URLSearchParams();

    if (selected) params.set("propertyType", selected.slug);
    if (location.trim()) params.set("location", location.trim());
    if (address.trim()) params.set("address", address.trim());
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);

    const query = params.toString();
    router.push(query ? `/marketplace?${query}` : "/marketplace");
    close();
    setLoading(false);
  };

  const resetFilters = () => {
    setSelected(undefined);
    setLocation("");
    setAddress("");
    setMinPrice("");
    setMaxPrice("");
    setStep(STEPS.TYPE);
  };
  return (
    <Modal title={"Filter properties"} isOpen={isOpen} onClose={close}>
      <div className="my-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Filter {step + 1} of 3</span>
          <span className="text-sm">{stepTitle()}</span>
        </div>
      </div>

      {/* content */}
      <div className="min-h-55 border border-dashed border-gray-300 rounded-2xl p-6 mt-4">
        {/* filter by TYPE */}
        {step === STEPS.TYPE && (
          <div className="grid grid-cols-2 gap-4 w-full overflow-y-scroll no-scrollbar max-h-[50vh]">
            {propertyTypes.map((item) => (
              <PropertyTypeCard
                key={item.id}
                item={item}
                onClick={() => setSelected(item)}
                selected={item === selected}
              />
            ))}
          </div>
        )}

        {/* filter by LOCATION */}
        {step === STEPS.LOCATION && (
          <div className="flex flex-col gap-8">
            <Input
              name="location"
              label="Location"
              value={location}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLocation(e.target.value)
              }
            />
            <Input
              name="address"
              label="Address"
              value={address}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAddress(e.target.value)
              }
            />
          </div>
        )}

        {/* filter by PRICE */}
        {step === STEPS.PRICE && (
          <div className="grid grid-cols-2 gap-8 mt-10">
            <Input
              name="min-price"
              label="Min Price"
              value={minPrice}
              type="number"
              min={0}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMinPrice(e.target.value)
              }
            />
            <Input
              name="max-price"
              label="Max Price"
              value={maxPrice}
              type="number"
              min={0}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMaxPrice(e.target.value)
              }
            />
          </div>
        )}
      </div>

      {/* buttons */}
      <div className="flex gap-4 mt-4">
        {step > STEPS.TYPE && (
          <Button
            fullWidth
            className="border border-gray-300"
            onClick={() => setStep((prev) => prev - 1)}
          >
            Back
          </Button>
        )}

        <Button
          fullWidth
          className="border border-gray-300"
          onClick={resetFilters}
        >
          Reset
        </Button>

        <Button
          fullWidth
          variant="outline"
          loading={loading}
          onClick={() =>
            step < STEPS.PRICE ? setStep((prev) => prev + 1) : applyFilter()
          }
        >
          {step < STEPS.PRICE ? "Next" : "Apply Filter"}
        </Button>
      </div>
    </Modal>
  );
}
