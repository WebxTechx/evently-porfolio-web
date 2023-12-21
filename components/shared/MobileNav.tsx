import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from "@/components/ui/separator"

import Image from 'next/image'
import Navitems from './Navitems'

const MobileNav = () => {
  return (
    <nav className="md:hidden flex">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="Hamburger"
            width={24}
            height={24}
            className='cursor-pointer'
          />
        </SheetTrigger>
        <SheetContent className='flex-col gap-6 bg-white md:hidden'>
            <div className='mb-5'>
                <Image 
                    src='/assets/images/logo.svg'
                    alt='logo'
                    width={128}
                    height={38}
                />
            </div>
            <Separator className='border border-gray-50' />
            <Navitems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav
