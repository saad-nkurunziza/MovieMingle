import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import Link from "next/link";
export const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Discover",
    path: "/discover",
  },
  {
    title: "Companies",
    path: "/company",
  },
  {
    title: "Genres",
    path: "/genre",
  },
];

const NavigationMenu = () => {
  return (
    <nav className="hidden md:flex h-5 items-center rounded p-1 shadow-sm gap-x-9">
      <ul className="flex space-x-2.5 items-center">
        {navLinks.map((link) => {
          return (
            <li key={link.path}>
              <Button asChild variant="link">
                <Link
                  href={link.path}
                  className="font-medium text-sm text-white/70"
                >
                  {link.title}
                </Link>
              </Button>
            </li>
          );
        })}
      </ul>
      <MagnifyingGlassIcon className="h-3 w-3" />
    </nav>
  );
};

export default NavigationMenu;
