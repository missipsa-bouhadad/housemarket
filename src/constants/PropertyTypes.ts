import { FaBuilding, FaHome, FaWarehouse, FaStore } from "react-icons/fa";

import { LuBuilding2, LuLandPlot, LuHotel, LuHousePlus } from "react-icons/lu";

export const propertyTypes = [
  {
    id: 1,
    label: "House",
    icon: FaHome,
    slug: "house",
  },
  {
    id: 2,
    label: "Apartment",
    icon: FaBuilding,
    slug: "apartment",
  },
  {
    id: 3,
    label: "Villa",
    icon: LuHousePlus,
    slug: "villa",
  },
  {
    id: 4,
    label: "Penthouse",
    icon: LuBuilding2,
    slug: "penthouse",
  },
  {
    id: 5,
    label: "Townhouse",
    icon: FaHome,
    slug: "townhouse",
  },
  {
    id: 6,
    label: "Commercial",
    icon: FaStore,
    slug: "commercial",
  },
  {
    id: 7,
    label: "Office",
    icon: FaBuilding,
    slug: "office",
  },
  {
    id: 8,
    label: "Warehouse",
    icon: FaWarehouse,
    slug: "warehouse",
  },
  {
    id: 9,
    label: "Hotel",
    icon: LuHotel,
    slug: "hotel",
  },
  {
    id: 10,
    label: "Land",
    icon: LuLandPlot,
    slug: "land",
  },
];
