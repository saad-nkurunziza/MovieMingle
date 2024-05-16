import Asidebar from "@/components/Asidebar";
import Link from "next/link";
import NavigationMenu from "./NavigationMenu";
export default function Navbar() {
  return (
    <div className="w-full px-2.5 md:container max-h-[10vh]">
      <div className="flex justify-between py-3">
        <div className="flex gap-x-16 items-center">
          <Link
            href={"/"}
            className="text-theme_primary text-xl uppercase font-black flex items-center"
          >
            Mingle
          </Link>
          <NavigationMenu />
        </div>
        {/*<Searchbar />*/}
        <Asidebar />
      </div>
    </div>
  );
}
