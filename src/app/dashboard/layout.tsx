import Image from "next/image";
import { ReactNode } from "react";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import {DashboardLinks} from "../components/DashboardLinks";
import { Button } from "@/components/ui/button";
import { signOut } from "../lib/auth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import requiereUser from "../lib/hook";
  



export default async function LayoutDashboard({children}:{children:ReactNode}){

    const session = await requiereUser()
    return(
        <div className="w-full h-screen grid md:grid-cols-[250px_1fr]">
            <nav className="hidden md:block bg-gray-300/10 border-r border-black/20">
                <div className="h-14 flex items-center justify-center border-b border-black/20">
                    <Image src='/next.svg' alt="logo" width={100} height={100}/>
                </div>
                <div className="flex flex-col gap-6 mt-5 px-2">
                <DashboardLinks/>
                </div>
            </nav>
            <div className="flex flex-col">
                <header className="h-14 border-b border-black/20 bg-gray-300/10 flex justify-between">Soy header
                <div className="block md:hidden">
                <Sheet>
                <SheetTrigger>Open</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle asChild>
                    <div className="h-14 flex items-center justify-center border-b border-black/20">
                    <Image src='/next.svg' alt="logo" width={100} height={100}/>
                    </div>
                    </SheetTitle>
                    <SheetDescription asChild>
                    <div className="flex flex-col gap-6 mt-5 px-2">
                        <DashboardLinks/>
                    </div>
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>
                </div>
                <div className="py-2 px-8">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="rounded-full" size='icon' variant='secondary'>
                            <Image 
                                src={session?.user?.image as string} 
                                alt='profileimg'
                                width={20} 
                                height={20} 
                                className="w-full h-full rounded-full"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settigns</DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <form 
                            action={async ()=>{
                                "use server"
                                await signOut()
                            }}
                            className="w-full">
                                <button className="w-full text-left">Log Out</button>
                            </form>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
                </header>
                {children}
            </div>
        </div>
    )
}