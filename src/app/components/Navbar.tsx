import DialogButton from '@/components/dialog-button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavbarComponent = () => {
  return (
    <div className='max-w-7xl m-auto h-[80px] flex items-center justify-between'>
        <Link href='/' className='text-white text-3xl font-semibold'>
            <Image src='/next.svg' width={100} height={100} alt='logo'/>
        </Link>
        <div className="">
            <DialogButton/>
        </div>
    </div>
  )
}

export default NavbarComponent