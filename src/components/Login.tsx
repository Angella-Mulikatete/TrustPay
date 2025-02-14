/* eslint-disable @typescript-eslint/no-unused-vars */

// /* eslint-disable @typescript-eslint/no-unused-vars */
// 'use client'

// import { useState } from 'react';
// import { useAccount, useConnect, useDisconnect } from 'wagmi';
// // import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { ConnectButton } from '@rainbow-me/rainbowkit';


// const Login = () => {
//   const { address, isConnected } = useAccount();
//   // const { connect } = useConnect({
//   //   connector: new MetaMaskConnector(),
//   // });
//   const { disconnect } = useDisconnect();
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [profileData, setProfileData] = useState({
//     name: '',
//     email: '',
//     userType: 'freelancer',
//     skills: '',
//     bio: ''
//   });

//   const handleProfileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/profile', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...profileData, walletAddress: address }),
//       });
//       if (response.ok) {
//         // Redirect to dashboard based on user type
//         window.location.href = profileData.userType === 'client' 
//           ? '/client-dashboard' 
//           : '/freelancer-dashboard';
//       }
//     } catch (error) {
//       console.error('Profile creation failed:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <Card className="w-full max-w-md">
//         {/* <CardHeader>
//           <CardTitle>Welcome to Trust Pay Platform</CardTitle>
//           <CardDescription>
//             Connect your wallet and create your profile to get started
//           </CardDescription>
//         </CardHeader> */}
//         <CardContent>
//           {!isConnected ? (
//            <ConnectButton />
//           ) : !isRegistering ? (
//             <div className="space-y-4">
//               <p className="text-sm text-gray-500">
//                 Wallet connected: {address}
//               </p>
//               <Button 
//                 className="w-full"
//                 onClick={() => setIsRegistering(true)}
//               >
//                 Complete Profile
//               </Button>
//               <Button 
//                 variant="outline" 
//                 className="w-full"
//                 onClick={() => disconnect()}
//               >
//                 Disconnect Wallet
//               </Button>
//             </div>
//           ) : (
//             <form onSubmit={handleProfileSubmit} className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Full Name</Label>
//                 <Input
//                   id="name"
//                   required
//                   value={profileData.name}
//                   onChange={(e) => setProfileData({...profileData, name: e.target.value})}
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   required
//                   value={profileData.email}
//                   onChange={(e) => setProfileData({...profileData, email: e.target.value})}
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="userType">I am a</Label>
//                 <Select
//                   value={profileData.userType}
//                   onValueChange={(value) => setProfileData({...profileData, userType: value})}
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select user type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="freelancer">Freelancer</SelectItem>
//                     <SelectItem value="client">Client</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {profileData.userType === 'freelancer' && (
//                 <div className="space-y-2">
//                   <Label htmlFor="skills">Skills (comma separated)</Label>
//                   <Input
//                     id="skills"
//                     value={profileData.skills}
//                     onChange={(e) => setProfileData({...profileData, skills: e.target.value})}
//                   />
//                 </div>
//               )}

//               <div className="space-y-2">
//                 <Label htmlFor="bio">Bio</Label>
//                 <Input
//                   id="bio"
//                   value={profileData.bio}
//                   onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
//                 />
//               </div>

//               <Button type="submit" className="w-full">
//                 Create Profile
//               </Button>
//             </form>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Login;

// 'use client';

// import { useState } from 'react';
// import { useAccount, useDisconnect } from 'wagmi';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import { motion } from 'framer-motion'; // Framer Motion for animations

// const Login = () => {
//   const { address, isConnected } = useAccount();
//   const { disconnect } = useDisconnect();
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [profileData, setProfileData] = useState({
//     name: '',
//     email: '',
//     userType: 'freelancer',
//     skills: '',
//     bio: '',
//   });

//   const handleProfileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/profile', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...profileData, walletAddress: address }),
//       });
//       if (response.ok) {
//         // Redirect to dashboard based on user type
//         window.location.href = profileData.userType === 'client' 
//           ? '/client-dashboard' 
//           : '/freelancer-dashboard';
//       }
//     } catch (error) {
//       console.error('Profile creation failed:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-4xl"
//       >
//         <Card className="w-full shadow-lg">
//           <CardHeader className="text-center">
//             <motion.h1
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//             >
//               Welcome to Trust Pay Platform
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//               className="text-lg text-gray-600 mt-2"
//             >
//               Connect your wallet and create your profile to get started
//             </motion.p>
//           </CardHeader>
//           <CardContent>
//             {!isConnected ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.6, duration: 0.5 }}
//                 className="flex justify-center"
//               >
//                 <ConnectButton />
//               </motion.div>
//             ) : !isRegistering ? (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.5 }}
//                 className="space-y-4"
//               >
//                 <p className="text-sm text-gray-500">
//                   Wallet connected: <span className="font-mono text-blue-600">{address}</span>
//                 </p>
//                 <Button
//                   className="w-full bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105"
//                   onClick={() => setIsRegistering(true)}
//                 >
//                   Complete Profile
//                 </Button>
//                 <Button
//                   variant="outline"
//                   className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-transform transform hover:scale-105"
//                   onClick={() => disconnect()}
//                 >
//                   Disconnect Wallet
//                 </Button>
//               </motion.div>
//             ) : (
//               <motion.form
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.5 }}
//                 onSubmit={handleProfileSubmit}
//                 className="space-y-4"
//               >
//                 <div className="space-y-2">
//                   <Label htmlFor="name" className="text-gray-700">Full Name</Label>
//                   <Input
//                     id="name"
//                     required
//                     value={profileData.name}
//                     onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
//                     className="border-2 border-gray-300 focus:border-blue-500 transition-all"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="email" className="text-gray-700">Email</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     required
//                     value={profileData.email}
//                     onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
//                     className="border-2 border-gray-300 focus:border-blue-500 transition-all"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="userType" className="text-gray-700">I am a</Label>
//                   <Select
//                     value={profileData.userType}
//                     onValueChange={(value) => setProfileData({ ...profileData, userType: value })}
//                   >
//                     <SelectTrigger className="border-2 border-gray-300 focus:border-blue-500 transition-all">
//                       <SelectValue placeholder="Select user type" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="freelancer">Freelancer</SelectItem>
//                       <SelectItem value="client">Client</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 {profileData.userType === 'freelancer' && (
//                   <div className="space-y-2">
//                     <Label htmlFor="skills" className="text-gray-700">Skills (comma separated)</Label>
//                     <Input
//                       id="skills"
//                       value={profileData.skills}
//                       onChange={(e) => setProfileData({ ...profileData, skills: e.target.value })}
//                       className="border-2 border-gray-300 focus:border-blue-500 transition-all"
//                     />
//                   </div>
//                 )}

//                 <div className="space-y-2">
//                   <Label htmlFor="bio" className="text-gray-700">Bio</Label>
//                   <Input
//                     id="bio"
//                     value={profileData.bio}
//                     onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
//                     className="border-2 border-gray-300 focus:border-blue-500 transition-all"
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105"
//                 >
//                   Create Profile
//                 </Button>
//               </motion.form>
//             )}
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;


'use client'

import React, { useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Feature from './Feature';
import NavBar from './navBar';
import Link from 'next/link';
import Image from 'next/image'

const LandingPage = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [isRegistering, setIsRegistering] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    userType: 'freelancer',
    skills: '',
    bio: ''
  });

  const handleProfileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...profileData, walletAddress: address }),
      });
      if (response.ok) {
        window.location.href = profileData.userType === 'client' 
          ? '/client-dashboard' 
          : '/freelancer-dashboard';
      }
    } catch (error) {
      console.error('Profile creation failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-24">
        <nav className="flex justify-between items-center mb-16">
          {/* <div className="text-2xl font-bold text-blue-600">TrustPay</div>  */}
          {/* <NavBar/> */}
          <Link href="/" className="transition-transform hover:scale-105">
            <Image 
              src="/assets/logo.jpg" 
              alt="TrustPay Logo" 
              width={250}  // Increased from 100
              height={250} // Adjusted to maintain aspect ratio
              //className="rounded-full object-cover" 
            />
          </Link>
          <div className="space-x-4">
            {!isConnected && <ConnectButton />}
          </div>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Secure Freelance Payments with Blockchain
            </h1>
            <p className="text-xl text-gray-600">
              Connect, collaborate, and transact with confidence. Our platform ensures secure payments and transparent contracts for freelancers and clients.
            </p>
            <div className="flex space-x-4">
              {!isConnected && (
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              )}
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {isConnected && (
            <Card className="w-full max-w-md mx-auto">
              <CardContent className="pt-6">
                {!isRegistering ? (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500">
                      Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
                    </p>
                    <Button 
                      className="w-full"
                      onClick={() => setIsRegistering(true)}
                    >
                      Complete Profile
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => disconnect()}
                    >
                      Disconnect Wallet
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleProfileSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        required
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="userType">I am a</Label>
                      <Select
                        value={profileData.userType}
                        onValueChange={(value) => setProfileData({...profileData, userType: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select user type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="freelancer">Freelancer</SelectItem>
                          <SelectItem value="client">Client</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {profileData.userType === 'freelancer' && (
                      <div className="space-y-2">
                        <Label htmlFor="skills">Skills (comma separated)</Label>
                        <Input
                          id="skills"
                          value={profileData.skills}
                          onChange={(e) => setProfileData({...profileData, skills: e.target.value})}
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Input
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Create Profile
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Features Section */}
     <Feature/>
    </div>
  );
};

export default LandingPage;



