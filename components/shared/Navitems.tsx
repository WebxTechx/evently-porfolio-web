import { headerLinks } from '@/constant'
import Link from 'next/link'
import React from 'react'

const Navitems = () => {
  return (
    <ul className='md:flex-between flex'>
        {headerLinks.map((link:any) => {
            return (
                <li><Link href={link.route}>{link.label}</Link></li>
            )
        })}
    </ul>
  )
}

export default Navitems