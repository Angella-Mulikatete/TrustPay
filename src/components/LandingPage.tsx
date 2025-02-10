'use client';

//import Link from 'next/link';
//import { Button } from '@/components/ui/button';
//import { ArrowRight, Shield, Clock, Coins } from 'lucide-react';
import { useEffect } from 'react';
import NavBar from './navBar';
import Feature from './Feature';
import Hero from './Hero';



export default function LandingPage() {
  useEffect(() => {
    // Add any client-side JavaScript logic here if needed
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          <NavBar/>
      <main 
        className="container mx-auto px-4 py-20 pt-32"
         //className="container mx-auto px-4 pt-32 pb-20"
        >
        {/* Hero Section */}
        <Hero/>
        {/* Features Grid */}
        <Feature/>
      </main>
    </div>
  );
}




















// 'use client'

// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Shield, Clock, Coins } from 'lucide-react';

// export default function LandingLanding() {

//   return (
//     <div className="min-h-screen">
//         <main className="container mx-auto px-4 py-20">
    
//               <div className="text-center mb-16">
//                 <h1 className="text-6xl font-bold mb-6">
//                   Secure Payments for Freelance Work
//                 </h1>
//                 <p className="text-xl text-gray-600 mb-8">
//                   TrustPay uses smart contracts and NFTs to ensure secure, transparent payments 
//                   for freelance projects
//                 </p>
//                 <div className="space-x-4">
//                   <Link href="/admin">
//                     <Button size="lg">
//                       For Businesses
//                       <ArrowRight className="ml-2" />
//                     </Button>
//                   </Link>
//                   <Link href="/freelancer">
//                     <Button size="lg" variant="outline">
//                       For Freelancers
//                       <ArrowRight className="ml-2" />
//                     </Button>
//                   </Link>
//                 </div>
//               </div>

//               {/* Features Grid */}
//               <div className="grid md:grid-cols-3 gap-8 mb-16">
//                 <div className="p-6 bg-white rounded-xl shadow-sm">
//                   <Shield className="w-12 h-12 text-blue-500 mb-4" />
//                   <h3 className="text-xl font-semibold mb-2">Secure Escrow</h3>
//                   <p className="text-gray-600">
//                     Funds are held securely in smart contracts until work is approved
//                   </p>
//                 </div>
//                 <div className="p-6 bg-white rounded-xl shadow-sm">
//                   <Clock className="w-12 h-12 text-blue-500 mb-4" />
//                   <h3 className="text-xl font-semibold mb-2">Milestone Tracking</h3>
//                   <p className="text-gray-600">
//                     Break projects into manageable milestones with NFT verification
//                   </p>
//                 </div>
//                 <div className="p-6 bg-white rounded-xl shadow-sm">
//                   <Coins className="w-12 h-12 text-blue-500 mb-4" />
//                   <h3 className="text-xl font-semibold mb-2">Instant Payments</h3>
//                   <p className="text-gray-600">
//                     Automatic payment release upon milestone approval
//                   </p>
//                 </div>
//               </div>
//             </main>
//           </div>
//   );
// }
