'use client'

import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../dropdown-menu";
import { Button } from "../../button";
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";

const ModeToggle = () => {
    const {theme, setTheme} = useTheme();

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            {theme === "system" ? (
              <SunMoon />
            ) : theme === "dark" ? (
              <MoonIcon />
            ) : (
              <SunIcon />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={theme === "system"}
            onClick={() => setTheme("system")}
          >
            System
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={theme === "light"}
            onClick={() => setTheme("light")}
          >
            Light
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={theme === "dark"}
            onClick={() => setTheme("dark")}
          >
            Dark
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    return ( <>Toggle</> );
}
 
export default ModeToggle;