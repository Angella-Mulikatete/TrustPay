import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="text-center mb-24 space-y-8">
    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent animate-fade-in">
      Secure Payments for Freelance Work
    </h1>
    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
      TrustPay uses smart contracts and NFTs to ensure secure, transparent payments
      for freelance projects
    </p>
    <div className="space-x-4 animate-fade-in">
      <Link href="/admin">
        <Button 
          size="lg"
          className="transform hover:scale-105 transition-all duration-300 bg-blue-600 hover:bg-blue-700"
        >
          For Businesses
          <ArrowRight className="ml-2 animate-bounce-x" />
        </Button>
      </Link>
      <Link href="/freelancer">
        <Button 
          size="lg" 
          variant="outline"
          className="transform hover:scale-105 transition-all duration-300 border-2"
        >
          For Freelancers
          <ArrowRight className="ml-2 animate-bounce-x" />
        </Button>
      </Link>
    </div>
  </div>

  )
}

export default Hero
