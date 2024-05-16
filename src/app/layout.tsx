import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FirstTimeDialog from "@/components/FirstTimeDialog";
// const inter = Inter({ subsets: ["latin"] });
import { ReactNode } from "react";
export const metadata: Metadata = {
  title: "MovieMingle",
  description:
    "Your personalized guide to the latest, upcoming, and trending films.",
};
export const revalidate = 3600;
export default function RootLayout({ children }: { children: ReactNode }) {
  
  return (
    <html lang="en">
      <body className="custom-scrollbar">
        <div className="flex flex-col overflow-x-hidden mx-auto">
          <Navbar />
          <FirstTimeDialog/>
          {children}
        </div>
      </body>
    </html>
  );
}
