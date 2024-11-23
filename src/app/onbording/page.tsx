import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
  
const OnbordignPage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Card className='w-[370px]'>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <Label>Name</Label>
                <Input/>
            </CardContent>
            <CardFooter className='flex flex-col gap-6'>
                <div className="w-full flex gap-4 items-center justify-center">
                <span>Nextjs.com</span>
                <Input placeholder='Nextjs.com/user-test123'/>
                </div>
                <Button className='w-full'>Submit</Button>
            </CardFooter>
        </Card>

    </div>
  )
}

export default OnbordignPage