import Searchbar from "@/components/Searchbar";
import { NavMenu } from "@/components/NavigationMenu";
import Asidebar from "@/components/Asidebar"
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="w-full container max-h-[10vh]">
      <div className="flex justify-between py-3">
        <div className="flex gap-x-16 items-center">
          <Link
            href={"/"}
            className="text-lg font-bold font-serif flex items-center"
          >
            Movie<span className="text-theme_primary">Mingle</span>
          </Link>
          <NavMenu />
        </div>
        {/*<Searchbar />*/}
        <Asidebar/>
      </div>
    </div>
  );
}
