/* eslint-disable @typescript-eslint/no-unused-vars */
// import Link from 'next/link';
'use client'
import { useState } from 'react';
import Dashboard from '@/components/dashboard';
import LandingPage from '@/components/LandingPage';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import Login from '@/components/Login';

const config = getDefaultConfig({
  appName: 'TrustPay DApp',
  projectId: '1a787640c27b1503945c31848d4bc76b',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
      {/* <LandingPage/> */}
      <Login/>
  
      </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>


    

  );
}














