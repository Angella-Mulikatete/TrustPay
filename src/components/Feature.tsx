/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from 'react'

import { Shield, Clock, Coins  } from 'lucide-react';

const Feature = () => {
  const [isHovered, setIsHovered] = useState(null);
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "Secure Escrow",
              description: "Funds are held securely in smart contracts until work is approved",
            },
            {
              icon: Clock,
              title: "Milestone Tracking",
              description: "Break projects into manageable milestones with NFT verification",
            },
            {
              icon: Coins,
              title: "Instant Payments",
              description: "Automatic payment release upon milestone approval",
            },
          ].map((feature, index:any) => (
            <div
              key={index}
              className={`
                p-8 rounded-xl transition-all duration-500 ease-in-out
                transform hover:-translate-y-2 hover:shadow-xl
                bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-green-50
                border border-gray-100 hover:border-blue-200
                ${isHovered === index ? 'scale-105' : 'scale-100'}
              `}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <feature.icon 
                className={`
                  w-12 h-12 mb-4 transition-colors duration-300
                  ${isHovered === index ? 'text-blue-600' : 'text-blue-500'}
                `}
              />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
  )
}

export default Feature
