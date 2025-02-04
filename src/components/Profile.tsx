/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import React, { useState, useEffect } from 'react';
// import { useAccount } from 'wagmi';
// import { getContract } from '../app/utils/contract';
import { useRouter } from 'next/navigation';

const Profile = ({ address }: { address:  `0x${string}` | undefined}) => {
  // const { address } = useAccount();
  // const {  isConnected } = useAccount();
 const [role, setRole] = useState<string | null>(null);
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [currentRole, setCurrentRole] = useState<string | null>(null);
  const router = useRouter();
//   const roleMapping: { [key: number]: string } = { 0: 'None', 1: 'Client', 2: 'Freelancer' };


  // const redirectToRolePage = (role: string) => {
  //   switch (role) {
  //     case 'business':
  //       window.location.href = '/admin';
  //       break;
  //     case 'client':
  //       window.location.href = '/client';
  //       break;
  //     case 'freelancer':
  //       window.location.href = '/freelancer';
  //       break;
  //     default:
  //       window.location.href = '/';
  //   }
  // };
  const redirectToRolePage = (role: string) => {
    switch (role) {
      case 'business':
        router.push('/business');
        break;
      case 'client':
        router.push('/client');
        break;
      case 'freelancer':
        router.push('/freelancer');
        break;
      default:
        router.push('/');
    }
  };



//   const fetchRole = async () => {
//     try {
//       const contract = await getContract();
//       const userRole = await contract.getRole(address);
//       const fetchedRole = roleMapping[userRole];

//       setCurrentRole(fetchedRole);

//       // Redirect if user is already registered
//       if (fetchedRole && fetchedRole !== 'None') {
//         redirectToRolePage(fetchedRole);
//       }
//     } catch (error) {
//       console.error('Error fetching role:', error);
//     }
//   };

//   const assignRole = async () => {
//     if (!role || !address) return;

//     try {
//       const contract = await getContract(true);
//       const roleValue = role === 'business' ? 0 : role === 'client' ? 1 : 2; // Map role to enum values in contract
//       const tx = await contract.assignRole(address, roleValue);
//       await tx.wait();

//       alert('Role assigned successfully!');
//       setIsRegistered(true);
//       fetchRole(); // Refresh the role

//       // Redirect user based on role
//       redirectToRolePage(role);
//     } catch (error) {
//       console.error('Error assigning role:', error);
//       alert('Failed to assign role.');
//     }
//   };




    // Redirect the user after successful registration
    // useEffect(() => {
    //   if (isRegistered || currentRole) {
    //     if (currentRole === 'Client') {
    //       router.push('/client');
    //     } else if (currentRole === 'Freelancer') {
    //       router.push('/freelancer');
    //     }else{
    //       router.push('/admin');
    //     }
    //   }
    // }, [isRegistered, currentRole, router]);
  
    // useEffect(() => {
    //   if (address) {
    //     fetchRole(); // Fetch role when the component loads
    //   }
    // }, [address]);

  if (!address) {
    return <div>Please connect your wallet to register.</div>;
  }


  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
    <h1 className="text-xl font-bold mb-4">Profile Registration</h1>
    <p>Your wallet address: {address}</p>

    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Select Your Role:</h2>
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded ${role === 'freelancer' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setRole('freelancer')}
        >
          Freelancer
        </button>
        <button
          className={`px-4 py-2 rounded ${role === 'client' ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setRole('client')}
        >
          Client
        </button>
        <button
          className={`px-4 py-2 rounded ${role === 'business' ? 'bg-purple-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setRole('business')}
        >
          Business
        </button>
      </div>
    </div>

    <button
      className="bg-blue-500 text-white px-4 py-2 rounded mt-6"
      disabled={!role}
    //  onClick={assignRole}
    >
      Register
    </button>
  </div>
  );
};

export default Profile;


  // Fetch role from smart contract
  // const fetchRole = async () => {
  //   try {
  //     const contract = await getContract();
  //     const userRole = await contract.getRole(address);
  //     setCurrentRole(roleMapping[userRole] || 'Unknown');
  //   } catch (error) {
  //     console.error('Error fetching role:', error);
  //   }
  // };



  // Assign role via smart contract
  // const assignRole = async () => {
  //   if (!role || !address) return;

  //   try {
  //     const contract = await getContract(true); 
  //     const roleValue = role === 'client' ? 1 : 2; // Map role to enum value in contract
  //     const tx = await contract.assignRole(address, roleValue);
  //     await tx.wait();

  //     alert('Role assigned successfully!');
  //     setIsRegistered(true);
  //     fetchRole(); // Refresh the role
  //   } catch (error) {
  //     console.error('Error assigning role:', error);
  //     alert('Failed to assign role.');
  //   }
  // };


  // if (isRegistered) {
  //   return (
  //     <div className="flex flex-col items-center justify-center min-h-screen">
  //       <h1 className="text-2xl font-bold mb-4">Welcome, {role}!</h1>
  //       <p>Your wallet address: {address}</p>
  //       <button
  //         className="bg-red-500 text-white px-4 py-2 rounded mt-4"
  //         // onClick={disconnect}
  //       >
  //         Disconnect Wallet
  //       </button>
  //     </div>
  //   );
  // }

  // if (isRegistered || currentRole !== 'None') {
  //   return (
  //     <div className="flex flex-col items-center justify-center min-h-screen">
  //       <h1 className="text-2xl font-bold mb-4">Welcome, {currentRole}!</h1>
  //       <p>Your wallet address: {address}</p>
  //       <button
  //         className="bg-red-500 text-white px-4 py-2 rounded mt-4"
  //         onClick={() => {
  //           setRole(null);
  //           setIsRegistered(false);
  //           setCurrentRole('None');
  //         }}
  //       >
  //         Disconnect Wallet
  //       </button>
  //     </div>
  //   );
  // }


// import React, { useState } from 'react';

// const Profile = ({ address }: { address: string }) => {
//   const [role, setRole] = useState<'freelancer' | 'client' | null>(null);
//   const [username, setUsername] = useState('');

//   const handleRegister = () => {
//     if (role && username) {
//       console.log(`Registering ${address} as ${role} with username ${username}`);
//       // Here, you can add code to save the profile data to the server or blockchain
//     } else {
//       alert('Please select a role and provide a username');
//     }
//   };

//   return (
//     <div>
//       <h2>Profile Registration</h2>
//       <p>Wallet Address: {address}</p>
//       <input
//         type="text"
//         placeholder="Enter your username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <div>
//         <button onClick={() => setRole('freelancer')} disabled={role === 'freelancer'}>
//           Freelancer
//         </button>
//         <button onClick={() => setRole('client')} disabled={role === 'client'}>
//           Client
//         </button>
//       </div>
//       <button onClick={handleRegister}>Register Profile</button>
//     </div>
//   );
// };

// export default Profile;






