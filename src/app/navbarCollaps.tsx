import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

type TNavbarCollapse = {
  children: React.ReactNode;
};

const navLinks = ["Features", "For Teams", "Resources"];

export function NavbarCollapse() {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false);
  return (
    <Sheet onOpenChange={(open) => setIsHamburgerClicked(open)}>
      <SheetTrigger asChild>
        <button className="z-[80] rounded-lg p-4 text-4xl hover:bg-[#efedec]">
          {isHamburgerClicked ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </SheetTrigger>
      <SheetContent side="top" className="absolute top-[6.25rem] px-3 py-8">
        <div className="space-y-4 px-4">
          <ul className="space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Button
                  variant="ghost"
                  className="w-full justify-start px-4 text-lg text-gray-800 hover:bg-gray-200"
                  asChild
                >
                  <Link href="/" className="py-6">
                    {link}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
          <div className="px-4">
            <Separator />
          </div>
          <div className="grid w-full grid-cols-2 gap-4 px-4">
            <Button className="bg-gray-300 py-6 text-lg font-semibold text-black hover:bg-gray-400">
              Sign In
            </Button>
            <Button
              variant="destructive"
              className="py-6 text-lg font-semibold"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
