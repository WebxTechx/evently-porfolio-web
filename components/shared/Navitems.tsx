'use client'

import { headerLinks } from '@/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navitems = () => {
  const pathName = usePathname()

  return (
    <ul className="md:flex-center flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link: any) => {
        const isActive = link.route === pathName;
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Navitems
