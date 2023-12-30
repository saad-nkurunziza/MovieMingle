import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "@/components/utils/Icons";
import Link from "next/link";
export default function Asidebar() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu width={22} height={22} />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <div className="flex flex-col justify-start my-5 px-3 py-5">
            <h3 className="text-lg font-bold text-foreground">Page links</h3>
            <nav className="gap-y-2 my-2 flex flex-col">
              <Link className="text-sm text-muted-foreground" href="/">
                Home
              </Link>
              <Link className="text-sm text-muted-foreground" href="/discover">
                Discover
              </Link>
              <Link className="text-sm text-muted-foreground" href="/actor">
                Actor
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
