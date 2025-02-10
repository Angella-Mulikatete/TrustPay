'use client'


import { useState } from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Activity, Users, CheckCircle } from 'lucide-react';

const Page = () => {
  const [deployModalOpen, setDeployModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Contracts
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Freelancers
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Completed Milestones
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <Button 
          onClick={() => setDeployModalOpen(true)}
          className="flex items-center"
        >
          <Plus className="mr-2 h-4 w-4" />
          Deploy New Contract
        </Button>
      </div>

      {/* Active Contracts */}
      <Card>
        <CardHeader>
          <CardTitle>Active Contracts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Contract List */}
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="p-4">Contract</th>
                  <th className="p-4">Client</th>
                  <th className="p-4">Value</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Contract rows would go here */}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Deploy Contract Modal */}
      {deployModalOpen && (
        <DeployContractModal onClose={() => setDeployModalOpen(false)} />
      )}
    </div>
  );
};

const DeployContractModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Deploy New Contract</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Client Address</label>
              <Input placeholder="0x..." />
            </div>
            <div>
              <label className="text-sm font-medium">Total Amount</label>
              <Input type="number" placeholder="1000" />
            </div>
            <div>
              <label className="text-sm font-medium">Token Address</label>
              <Input placeholder="0x..." />
            </div>
            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button>Deploy Contract</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;