
'use client'

// import { useState } from 'react';
// import InvoiceList from '../../components/invoiceList';

// export default function Freelancer() {
//   const [userRole, setUserRole] = useState<"business" | "client" | null>(null);
  
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Freelancer Dashboard</h1>
//        {/* <InvoiceList userRole={userRole} onUpdate={fetchContractState} />  */}
//     </div>
//   );
// }


import { useState } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Award, DollarSign } from 'lucide-react';

const Page = () => {
    const [selectedTab, setSelectedTab] = useState('milestones');

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Milestones
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              NFTs Owned
            </CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Earnings
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,400</div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 border-b">
        <button
          className={`px-4 py-2 ${
            selectedTab === 'milestones' 
              ? 'border-b-2 border-blue-500 text-blue-500' 
              : ''
          }`}
          onClick={() => setSelectedTab('milestones')}
        >
          Milestones
        </button>
        <button
          className={`px-4 py-2 ${
            selectedTab === 'nfts' 
              ? 'border-b-2 border-blue-500 text-blue-500' 
              : ''
          }`}
          onClick={() => setSelectedTab('nfts')}
        >
          My NFTs
        </button>
      </div>

      {/* Content */}
      {selectedTab === 'milestones' ? (
        <MilestonesList />
      ) : (
        <NFTGallery />
      )}
    </div>
  );
};

const MilestonesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Website Redesign - Phase 1</CardTitle>
          <Badge variant="outline">In Progress</Badge>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              Complete homepage and navigation redesign
            </p>
            <div className="flex justify-between text-sm">
              <span>Due Date: Mar 1, 2024</span>
              <span>Value: $1,000</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Claim NFT</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const NFTGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Milestone #1 NFT</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-square bg-gray-100 rounded-lg mb-4" />
          <div className="space-y-2">
            <Badge>Not Redeemed</Badge>
            <p className="text-sm text-gray-600">
              Website Redesign - Phase 1
            </p>
            <div className="text-sm text-gray-600">
              Value: 1,000 USDC
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Redeem NFT</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;