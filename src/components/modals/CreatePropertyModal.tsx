"use client";

import { useCreatePropertyModal } from "@/store/useCreatePropretyModal";
import Modal from "./Modal";
import React, { useState } from "react";
import Button from "../ui/Button";
import { propertyTypes } from "@/constants/PropertyTypes";
import PropertyTypeCard from "../properties/PropertyTypeCard";
import { PropertyType } from "@/types/propertyType";
import Input from "../ui/Input";
import Counter from "../properties/Counter";
import ImageUpload from "../properties/ImageUpload";
import { FiChevronDown } from "react-icons/fi";

const STEPS = {
  TYPE: 0,
  LOCATION: 1,
  DETAILS: 2,
  FEATURES: 3,
  IMAGE: 4,
  PRICING: 5,
};

export default function CreatePropertyModal() {
  const { isOpen, closeCreateProperty } = useCreatePropertyModal();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<PropertyType>();

  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");

  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [parckingSpaces, setParckingSpaces] = useState(1);
  const [area, setArea] = useState("");

  const [propertyTitle, setPropertyTitle] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");

  const [image, setImage] = useState<null | File>(null);
  const [preview, setPreview] = useState<null | string>(null);

  const [listingType, setListingType] = useState<"rent" | "sale">("sale");
  const [price, setPrice] = useState("");

  const stepTitle = () => {
    switch (step) {
      case STEPS.TYPE:
        return "Select property type";
      case STEPS.LOCATION:
        return "Where is the property located ?";
      case STEPS.DETAILS:
        return "Share some basics about your place";
      case STEPS.FEATURES:
        return "Property description";
      case STEPS.IMAGE:
        return "Upload property image";
      case STEPS.PRICING:
        return "Set propery price";

      default:
        break;
    }
  };

  const handleImageChange = (file: File) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const createListing = async () => {};

  return (
    <Modal
      title={"Create a new listing"}
      isOpen={isOpen}
      onClose={closeCreateProperty}
    >
      <div className="my-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">step {step + 1} of 6</span>
          <span className="text-sm">{stepTitle()}</span>
        </div>

        {/* content */}
        <div className="min-h-55 border border-dashed border-gray-300 rounded-2xl p-6 mt-4">
          {/* first step */}
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

          {/* second step */}
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

          {/* third step */}
          {step === STEPS.DETAILS && (
            <div className="space-y-2">
              <Counter
                title={"Bedrooms"}
                subTitle="How many bedrooms ?"
                value={bedrooms}
                onChange={setBedrooms}
              />
              <Counter
                title={"Bathrooms"}
                subTitle="How many bathrooms ?"
                value={bathrooms}
                onChange={setBathrooms}
              />
              <Counter
                title={"Parcking Spaces"}
                subTitle="How many parcking spaces ?"
                value={parckingSpaces}
                onChange={setParckingSpaces}
              />
              <div className="mb-5"></div>
              <Input
                label="Property Area"
                name="sqft"
                value={area}
                type="number"
                min={0}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setArea(e.target.value)
                }
              />
            </div>
          )}

          {/* fourth step */}
          {step === STEPS.FEATURES && (
            <div className="flex flex-col gap-4">
              <Input
                label="Property Title"
                name="property-title"
                value={propertyTitle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPropertyTitle(e.target.value)
                }
              />
              <Input
                as="textarea"
                label="Description"
                name="property-description"
                value={propertyDescription}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPropertyDescription(e.target.value)
                }
              />
            </div>
          )}

          {/* fifth step */}
          {step === STEPS.IMAGE && (
            <ImageUpload preview={preview} onChange={handleImageChange} />
          )}

          {/* sixth step */}
          {step === STEPS.PRICING && (
            <div className="space-y-8">
              <div className="relative mt-4">
                <select
                  name=""
                  id=""
                  value={listingType}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setListingType(e.target.value as "sale" | "rent")
                  }
                  className="h-13 w-full appearance-none rounded-xl px-3 pr-10 border border-gray-300"
                >
                  <option value="rent">For Rent</option>
                  <option value="sale">For Sale</option>
                </select>
                <FiChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-primary"
                  size={18}
                />
              </div>

              <Input
                name="price"
                type="number"
                min={0}
                value={price}
                label={listingType === "rent" ? "Monthly Rent" : "Sale Price"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPrice(e.target.value)
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
            variant="outline"
            loading={loading}
            onClick={() =>
              step < STEPS.PRICING
                ? setStep((prev) => prev + 1)
                : createListing()
            }
          >
            {step < STEPS.PRICING ? "Next" : "Create listing"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
