import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-end bg-black text-white">
      <div className="absolute inset-0 h-full w-full object-cover opacity-50">
        <Image
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Symbolic Image"
          sizes="100vw"
          fill
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      <div className="pointer-events-none absolute -bottom-36 z-40 grid w-full grid-cols-3 gap-1.5 px-8 md:gap-4">
        <div className="max-h-80 bg-gradient-to-tr from-blue-600 to-red-500"></div>
        <div className="relative z-10 mb-28 max-w-screen-lg p-6 md:p-12 col-span-2">
          <h1 className="mb-4 text-2xl font-black text-red-600 md:text-2xl">
            Movie Title
          </h1>
          <p className="mb-8 max-w-2xl md:text-lg">
            A gripping sentence that captures the movie&apos;s essence and
            central conflict.
          </p>
          <div className="flex space-x-4">
            <div className="cursor-pointer rounded-xl bg-red-600 px-4 py-2 text-lg text-white transition duration-300 ease-in-out hover:bg-red-700">
              Watch Trailer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
