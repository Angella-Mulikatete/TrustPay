// /* eslint-disable @typescript-eslint/no-empty-object-type */
// // components/InvoiceList.js
// import { useState, useEffect } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { getContract, parseEther, formatEther } from '../app/utils/contract';
// import {  Invoice,BaseComponentProps } from '../app/utils/types'; // Importing types

// interface InvoiceListProps extends BaseComponentProps {}

// export default function InvoiceList({ userRole, onUpdate }: InvoiceListProps) {
//   const [invoices, setInvoices] = useState<Invoice[]>([]);
//   const [newInvoice, setNewInvoice] = useState({ details: '', amount: '' });
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchInvoices();
//   }, []);

//   const fetchInvoices = async () => {
//     try {
//       const response = await fetch('/api/invoices');
//       const data = await response.json();
//       setInvoices(data);
//     } catch (error) {
//       console.error('Error fetching invoices:', error);
//     }
//   };

//   const handleAddInvoice = async () => {
//     if (!newInvoice.details || !newInvoice.amount) return;

//     setLoading(true);
//     try {
//       const contract = await getContract(true);
//       const tx = await contract.addInvoice(
//         newInvoice.details,
//         parseEther(newInvoice.amount)
//       );
//       await tx.wait();
//       setNewInvoice({ details: '', amount: '' });
//       await fetchInvoices();
//       if (onUpdate) onUpdate();
//     } catch (error) {
//       console.error('Error adding invoice:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePayInvoice = async (invoiceId: number) => {
//     setLoading(true);
//     try {
//       const contract = await getContract(true);
//       const tx = await contract.payInvoice(invoiceId);
//       await tx.wait();
//       await fetchInvoices();
//       if (onUpdate) onUpdate();
//     } catch (error) {
//       console.error('Error paying invoice:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Invoices</CardTitle>
//       </CardHeader>
//       <CardContent>
//         {userRole === 'business' && (
//           <div className="mb-6 space-y-4">
//             <Input
//               placeholder="Invoice Details"
//               value={newInvoice.details}
//               onChange={(e) => setNewInvoice({...newInvoice, details: e.target.value})}
//             />
//             <Input
//               type="number"
//               placeholder="Amount (ETH)"
//               value={newInvoice.amount}
//               onChange={(e) => setNewInvoice({...newInvoice, amount: e.target.value})}
//             />
//             <Button onClick={handleAddInvoice} disabled={loading}>
//               {loading ? 'Adding...' : 'Add Invoice'}
//             </Button>
//           </div>
//         )}

//         <div className="space-y-4">
//           {invoices.map((invoice) => (
//             <Card key={invoice.invoiceId}>
//               <CardContent className="p-4">
//                 <div className="grid gap-2">
//                   <div>ID: {invoice.invoiceId}</div>
//                   <div>Details: {invoice.details}</div>
//                   <div>Amount: {formatEther(invoice.amount)} ETH</div>
//                   <div>Status: {invoice.paid ? 'Paid' : 'Unpaid'}</div>
//                   {userRole === 'client' && !invoice.paid && (
//                     <Button
//                       onClick={() => handlePayInvoice(invoice.invoiceId)}
//                       disabled={loading}
//                     >
//                       {loading ? 'Processing...' : 'Pay Invoice'}
//                     </Button>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

















