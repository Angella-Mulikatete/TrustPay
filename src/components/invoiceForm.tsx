'use client'
import { useState } from 'react';
// import { addInvoice } from '../app/utils/contract';

export default function InvoiceForm() {
  const [details, setDetails] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async () => {
    // await addInvoice(details, amount);
    // alert('Invoice added successfully!');
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl mb-2">Add Invoice</h2>
      <input
        type="text"
        placeholder="Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
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
