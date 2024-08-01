import Billboard from "@/components/Billboard";
import Categories from "@/components/Categories";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import React, { FC, Suspense } from "react";
export default function Home() {
  return (
    <section className="relative w-full ">
      <Suspense fallback={<Skeleton className="h-[270px] w-[200px]" />}>
        <Billboard />
      </Suspense>
      <section className="md:pb-12 md:pt-28  md:container">
        <Categories />
      </section>
      <div className="absolute flex justify-between w-screen -bottom-6 py-1 px-3 bg-neutral-900">
        <h5 className="text-xs text-neutral-400">MovieMingle@2023</h5>
        <Link
          className="text-xs text-neutral-400"
          href="https://saad-nkurunziza.vercel.app/"
          target="_blank"
        >
          Saad
        </Link>
      </div>
    </section>
  );
}
