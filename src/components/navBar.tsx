import React from 'react'
//import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
//import { Wallet } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const NavBar = () => {
  return (
    <div>

      <nav className="flex top- 0w-full bg-white/80 backdrop-blur-md border-b z-50 pb-7">
        <div className="container mx-auto px-4 h-20 flex justify-between items-center">
          <Link href="/" className="transition-transform hover:scale-105">
            <Image 
              src="/assets/logo.jpg" 
              alt="TrustPay Logo" 
              width={250}  // Increased from 100
              height={250} // Adjusted to maintain aspect ratio
              //className="rounded-full object-cover" 
            />
          </Link>
          <span 
           // variant="outline"
            className=" items-center space-x-4 bg-white hover:bg-blue-50 transition-all duration-300 border-blue-200 hover:border-blue-400"
          >
            {/* <Wallet className="w-4 h-4" />
            <span>Connect Wallet</span> */}
            <ConnectButton />
          </span>
        </div>
      </nav>
    </div>
  )
}

export default NavBar



