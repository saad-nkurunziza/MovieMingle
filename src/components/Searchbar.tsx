"use client";
import { Button } from "@/components/ui/button";
import { DialogTrigger, DialogContent, Dialog } from "@/components/ui/dialog";
import {
  CommandInput,
  CommandEmpty,
  CommandItem,
  CommandGroup,
  CommandSeparator,
  CommandShortcut,
  CommandList,
  Command,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import { SearchIcon, HistoryIcon } from "@/components/utils/Icons";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

export default function Searchbar() {
  const [query, setQuery] = useState();
  // const router = useRouter();

  // useEffect(() => {
  //   router.push(`/?q=` + query);
  // }, [query, router]);
  return (
    <div className="hidden md:block">
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <SearchIcon className="w-4 h-4 mr-2" /> Search here ...
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <div className="flex flex-col w-full">
          <Input>
            <SearchIcon className="w-4 h-4 mr-2" />
            <span>Search</span>
          </Input>
          <div>
            <div className="flex gap-x-1">
              <div className="w-5 h-5 bg-neutral-600 rounded" />
              <div>
                <div className="flex gap-x-2">
                  <h3>Go On</h3>
                  <span>2021</span>
                </div>
                <p>Alraedynnnnnnnnnnnnn</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </div>
  );
}
