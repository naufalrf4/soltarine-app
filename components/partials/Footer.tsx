import React from 'react'
import { navLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600 dark:text-teal-300">
        <Image src="/images/soltarine-logo.png" alt="logo" width={128} height={128} priority />
    </div>

    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
      itaque neque.
    </p>

    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        {navLinks.map((link, index) => (
            <li key={index}>
            <Link
                href={link.path}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
                {link.title}
            </Link>
            </li>
        ))}
    </ul>

    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
    
    </ul>
  </div>
</footer>
  )
}

export default Footer