"use client"

import { useState } from "react";
import Button from "../ui/Button";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const router = useRouter()
  const [search, setSearch] = useState("")

  const handleSearch = () => {
    if(!search.trim()){
      return ;
    }
    router.push(`/marketplace?search=${search}`);
  }
  return (
    <div className="mt-10 p-3 rounded-[30px] bg-white/10 shadow-2xl">
      <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
        {/* Search box */}
        <input
          type="text"
          placeholder="Search by city, neighberhood, or address"
          className="flex-1 px-5 py-4 h-14 w-full rounded-2xl outline-none text-white placeholder:text-white/30"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
        />
        <Button icon={<FiSearch/>} onClick={handleSearch}>Search</Button>
      </div>
    </div>
  );
}
