import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
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

export function NavbarCollapse() {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false);
  return (
    <Sheet onOpenChange={(open) => setIsHamburgerClicked(open)}>
      <SheetTrigger asChild>
        <button className="z-[80] rounded-lg p-4 text-4xl hover:bg-[#efedec]">
          {isHamburgerClicked ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </SheetTrigger>
      <SheetContent side="top" className="absolute top-[6.25rem]">
        <ul className="space-y-4 p-4">
          {[...Array<null>(5)].map((_, index) => (
            <li key={index}>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
