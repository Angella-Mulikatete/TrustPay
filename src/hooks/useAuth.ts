/* eslint-disable @typescript-eslint/no-unused-vars */
// hooks/useAuth.ts
'use client'

import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const { address, isConnected } = useAccount();
  const router = useRouter();
  const [isProfileCreated, setIsProfileCreated] = useState(false);

  useEffect(() => {
    const checkProfile = async () => {
      if (isConnected && address) {
        try {
          const response = await fetch(`/api/profile?address=${address}`);
          if (response.ok) {
            const data = await response.json();
            setIsProfileCreated(data.exists);
          }
        } catch (error) {
          console.error('Error checking profile:', error);
        }
      }
    };

    checkProfile();
  }, [isConnected, address]);

  return { isConnected, isProfileCreated, address };
};