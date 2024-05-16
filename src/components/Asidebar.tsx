import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "./ui/button";
import { navLinks } from "./NavigationMenu";
export default function Asidebar() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Bars2Icon className="w-4 h-4" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <div className="flex flex-col justify-start my-5 px-3 py-5">
            <h3 className="text-[10px] uppercase font-bold text-foreground">
              general
            </h3>
            <nav className="gap-y-3 my-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  className="text-sm text-muted-foreground"
                  href={link.path}
                  key={link.path}
                >
                  {link.title}
                </Link>
              ))}
              <Separator />
              <Link className="text-sm text-muted-foreground" href="/search">
                <Button variant="outline">Search</Button>
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
