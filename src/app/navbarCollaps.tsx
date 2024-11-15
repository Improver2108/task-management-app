import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

type TNavbarCollapse = {
  children: React.ReactNode;
};

export function NavbarCollapse({ children }: TNavbarCollapse) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="top">
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
