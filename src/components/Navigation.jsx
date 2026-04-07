import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";

export default function Navigation({ navLinks = [] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Navigation</SheetTitle>
          <SheetDescription className="text-left sr-only">Main menu options</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8 px-6">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.to}>
              <Button variant="secondary" asChild className="justify-start text-md">
                <Link to={link.to}>{link.label}</Link>
              </Button>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}