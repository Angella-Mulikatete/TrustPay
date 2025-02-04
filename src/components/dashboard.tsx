/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import InvoiceList from '@/components/invoiceList';
// import MilestoneForm from '@/components/milestoneForm';
// import ContractOverview from '@/components/contractOverview';
// import ConnectWallet from '@/components/connectWallet';
import Profile from './Profile';



export default function Dashboard() {
  const [contractState, setContractState] = useState(null);
  const [userRole, setUserRole] = useState<"business" | "client" | null>(null);
  const router = useRouter();

//   const fetchContractState = useCallback(async () => {
//     try {
//       const response = await fetch('/api/contract/state');
//       const data = await response.json();
//       setContractState(data);
      
//       if (address) {
//         if (address.toLowerCase() === data.business.toLowerCase()) {
//           setUserRole('business');
//         } else if (address.toLowerCase() === data.client.toLowerCase()) {
//           setUserRole('client');
//         }
//       }
//     } catch (error) {
//       console.error('Error fetching contract state:', error);
//     }
//   }, [address]);

//   useEffect(() => {
//     if (isConnected) {
//       router.push('/profile');
//     }
//   }, [isConnected, router]);

//   useEffect(() => {
//     if (isConnected) {
//       fetchContractState();
//     }
//   }, [isConnected, fetchContractState]);

//   if (!isConnected) {
//     return <ConnectWallet />;
//   }

  return (
    <Card>
      <div className="flex flex-col items-center justify-center h-screen">
      <CardHeader className="text-3xl font-bold mb-8">
        <CardTitle>Welcome To TrustPay</CardTitle>
        <CardDescription>Connected as: </CardDescription>
      </CardHeader>
      <CardContent>
            {/* <Profile address={address} /> */}
            <Button  
                className="bg-red-500 text-white px-4 py-2 rounded mt-4" 
               // onClick={() => disconnect()}
            >Disconnect</Button>
      </CardContent>
      </div>
    </Card>
  );
}











