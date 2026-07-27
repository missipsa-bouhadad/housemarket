import React from "react";
import Button from "../ui/Button";
import { FiSearch } from "react-icons/fi";

export default function SearchBox() {
  return (
    <div className="mt-10 p-3 rounded-[30px] bg-white/10 shadow-2xl">
      <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
        {/* Search box */}
        <input
          type="text"
          placeholder="Search by city, neighberhood, or address"
          className="flex-1 px-5 py-4 h-14 w-full rounded-2xl outline-none text-white placeholder:text-white/30"
        />
        <Button icon={<FiSearch/>}>Search</Button>
      </div>
    </div>
  );
}
