"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from "next/image"
function Navbar() {
  return (
    <div>
    <nav className='fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent'>
    <div className="flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-black/50">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/image/logo.png"
              alt="RubMeter Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-medium text-white">RubMeter</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Home 
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            Why Track?
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            About
          </Link>
         
        </nav>
        <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
              Join Waitlist
        </Button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar