"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    router.push(`/search?q=` + searchValue);
  }, [searchValue, router]);

  return (
    <form className="md:ml-auto w-2/3">
      <Input
        className="rounded-lg py-4 shadow"
        placeholder="Search for movies, genres, actors..."
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
};

export default Searchbar;
