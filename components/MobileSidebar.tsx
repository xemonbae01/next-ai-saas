"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sideber from "@/components/Sidebar";
import { useEffect, useState } from "react";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  //this code is for ("Unhandled Runtime Error" Error: Hydration failed because the initial UI does not match what was rendered on the server.)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  //this code is for ("Unhandled Runtime Error" Error: Hydration failed because the initial UI does not match what was rendered on the server.)

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sideber />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
