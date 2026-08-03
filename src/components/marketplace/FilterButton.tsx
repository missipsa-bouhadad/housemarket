"use client";

import Button from "../ui/Button";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { useFilterModal } from "@/store/useFilterModal";

export default function FilterButton() {
  const { open } = useFilterModal();
  return (
    <Button variant="outline" icon={<HiAdjustmentsHorizontal />} onClick={open}>
      Filter
    </Button>
  );
}
