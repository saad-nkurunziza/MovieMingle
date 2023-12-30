import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// const inter = Inter({ subsets: ["latin"] });
import { ReactNode } from "react";
export const metadata: Metadata = {
  title: "MovieMingle",
  description:
    "Your personalized guide to the latest, upcoming, and trending films.",
};
// className={inter.className}
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="custom-scrollbar">
        <div className="flex flex-col overflow-x-hidden mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
