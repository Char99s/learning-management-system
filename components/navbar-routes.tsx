"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export const NavbarRoutes = () => {

    const pathname = usePathname();
    const router = useRouter();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname.includes("/chapter");

    return(
        <div className="flex gap-x-2 ml-auto">
            {isTeacherPage || isPlayerPage ? (
                <Link href="/">
                <Button size="sm" variant="ghost">
                    <LogOut className="h-4 w-4 mr-2" />
                    Exit
                </Button>
                </Link>
            ) : (
                <Link href="/teacher/courses">
                <Button size="sm" variant="ghost" >
                    Teacher Mode
                </Button>
                </Link>
            )}
            <div>
                <form action="/signout" method="post">
                    <Button size="sm" variant="destructive" type="submit">
                        Sign out
                    </Button>
                </form>
            </div>
        </div>
    )
}