import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { signOutUser } from "@/lib/actions/users.actions";
import { UserIcon } from "lucide-react";
import Link from "next/link";

const UserButton = async () => {
    const session = await auth();

    if (!session) {
        return (
            <Button asChild>
                <Link href='/sign-in'>
                <UserIcon/> Sign In
                </Link>
            </Button>
        );
    }
    const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? "";
    return (
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center">
              <Button
                variant="ghost"
                className="relative w-8 h-8 rounded-full ml-2 flex items-center justify-center bg-custom-bk-blue-100 text-white hover:bg-custom-bk-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-bk-blue-300"
              >
                {firstInitial}
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <div className="text-sm font-medium leading-none">
                  {session.user?.name}
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="text-sm text-muted-foreground leading-none">
                  {session.user?.email}
                </div>
              </div>
            </DropdownMenuLabel>
        <DropdownMenuItem>
          <form action={signOutUser} className="w-full" >
            <Button className="w-full py-4 px-2 h-4 justify-start" variant={"ghost"} >
              Sign Out

            </Button>

          </form>
        </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
}
 
export default UserButton;