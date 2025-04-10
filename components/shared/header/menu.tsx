import { EllipsisVertical, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "../../ui/button";
import ModeToggle from "./mode-toggle";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../../ui/sheet";
import UserButton from "./user-btn";

const Menu = () => {
    return (
      <div className="flex justify-end gap-3">
        <nav className="hidden md:flex w-full max-w-xs gap-1">
          <ModeToggle />
          <Button
            asChild
            variant="ghost"
            className="hover:bg-transparent hover:text-custom-bk-blue-100 "
          >
            <Link href="/cart">
              <ShoppingCart size={24} /> Cart
            </Link>
          </Button>
          <UserButton />
        </nav>
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-2 items-start">
              <SheetTitle>Menu</SheetTitle>
              <ModeToggle />
              <Button
                asChild
                variant="ghost"
                className="hover:bg-transparent hover:text-custom-bk-blue-100 "
              >
                <Link href="/cart">
                  <ShoppingCart size={24} /> Cart
                </Link>
              </Button>
              <UserButton />

              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    );
}
 
export default Menu;