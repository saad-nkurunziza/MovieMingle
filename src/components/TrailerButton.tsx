import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { TrailerTypes } from "@/lib/types";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";
import { PlayIcon } from "@/components/utils/Icons";
import Image from "next/image";
import Link from "next/link";
const TrailerButton = ({ trailers }: { trailers: TrailerTypes[] }) => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <Button
            className="text-black bg-white rounded-lg"
            size="default"
            variant="secondary"
          >
            Trailer
          </Button>
        </DrawerTrigger>
        <DrawerContent className="">
          <DrawerHeader>
            <DrawerTitle>Trailers</DrawerTitle>
            <DrawerDescription>Youtube trailers</DrawerDescription>
          </DrawerHeader>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 container px-4 pb-6">
            {trailers.map((trailer) => {
              const thumbnailUrl = `https://img.youtube.com/vi/${trailer.key}/maxresdefault.jpg`;
              const videoUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
              return (
                <Card
                  className="shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 ease-in-out"
                  key={trailer.id}
                >
                  <Link
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        alt={trailer.name}
                        className="w-full object-cover aspect-[600/400] hover:opacity-90 transition-opacity duration-300 ease-in-out"
                        // height="400"
                        src={thumbnailUrl}
                        fill
                        // width="600"
                      />
                      <Button
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-300 ease-in-out"
                        size={"icon"}
                        variant={"outline"}
                      >
                        <PlayIcon className="w-6 h-6" />
                      </Button>
                    </div>
                    <CardHeader className="p-6">
                      <CardTitle className="text-2xl font-extrabold text-gray-900">
                        {trailer.name}
                      </CardTitle>
                      {trailer.official && (
                        <CardDescription className="text-base text-gray-600 mt-2">
                          Official Trailer
                        </CardDescription>
                      )}
                    </CardHeader>
                  </Link>
                </Card>
              );
            })}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default TrailerButton;
