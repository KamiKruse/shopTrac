import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { EllipsisIcon, ShoppingCart, UserIcon } from "lucide-react";
import ModeSwitch from "./ModeSwitch";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Menu() {
  return (
    <div className=''>
      <Sheet>
        <SheetTrigger>
          <EllipsisIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>Menu</SheetTitle>
          <ModeSwitch />
          <Button asChild variant='ghost'>
            <Link href='/cart'>
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href='/sign-in'>
              <UserIcon /> Sign In
            </Link>
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  )
}
