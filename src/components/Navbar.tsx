"use client";
import Asidebar from "@/components/Asidebar";
import Link from "next/link";
import NavigationMenu from "./NavigationMenu";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
export default function Navbar() {
  const [showBackground, setShowBackground] = useState(false);

  const TOP_OFFSET = 66;

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-screen fixed z-40">
      <div
        className={`px-4 w-screen backdrop-blur-lg justify-between md:px-16 py-3 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <div className="flex gap-x-16 items-center">
          <Link
            href={"/"}
            className="text-red-700 text-xl uppercase font-black flex items-center"
          >
            Mingle
          </Link>
          <NavigationMenu />
        </div>
        <Link href={"/search"}>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BiSearch className="w-6 h-5" />
          </div>
        </Link>
        <Asidebar />
      </div>
    </div>
  );
}
