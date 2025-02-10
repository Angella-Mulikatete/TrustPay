'use client'

import { useState } from 'react';
// import ContractBalance from '../components/ContractBalance';
// import { fundContract } from '../lib/contract';

export default function Page() {
    const [amount, setAmount] = useState('');

  const handleFundContract = async () => {
    // await fundContract(amount);
    alert('Contract funded successfully!');
  };

return (
    <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
            {/* <ContractBalance /> */}
        <div className="mt-4">
        <h2 className="text-xl mb-2">Fund Contract</h2>
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border px-2 py-1"
            />
        <button  className="bg-green-500 text-white px-4 py-2 rounded ml-2">
            Fund
        </button>
        <button onClick={handleFundContract} className="bg-green-500 text-white px-4 py-2 rounded ml-2">
            Fund
        </button>
      </div>
    </div>
  );
}
