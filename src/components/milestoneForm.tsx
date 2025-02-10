'use client'

import { useState } from 'react';
// import { addMilestone } from '../lib/contract';

export default function MilestoneForm() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async () => {
    // await addMilestone(description, amount);
    // alert('Milestone added successfully!');
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl mb-2">Add Milestone</h2>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border px-2 py-1 mr-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border px-2 py-1"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
        Add
      </button>
    </div>
  );
}
