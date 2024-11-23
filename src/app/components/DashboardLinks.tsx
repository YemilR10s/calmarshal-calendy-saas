'use client'


import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Types {
    name: string,
    href: string,
    icon: any
}

export const dashboardLinks: Types[] = [
    {name: "Events",
     href: "/dashboard",
     icon: ""   
    },
    {name: "Meetings",
     href: "/dashboard/meetings" ,
     icon: ""  
    },
    {name: "Availablity",
     href: "/dashboard/availablity",
     icon: ""   
    },
    {name: "Settings",
     href: "/dashboard/settings" ,
     icon: "",
    },
]


export function DashboardLinks(){

    const pathName = usePathname()

  return (
    <>
        {dashboardLinks.map((liks, id)=>(
            <Link href={liks.href} key={id}>
                <Button className="w-full"   variant={ pathName === liks.href ? 'default' : 'outline'} >
                    {liks.name}
                </Button>
            </Link>
        ))}
    </>
  )
}
