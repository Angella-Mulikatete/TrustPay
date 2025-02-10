// /* eslint-disable @typescript-eslint/no-unused-vars */
// 'use client'

// import { useState } from "react";
// import { Button, TextField, Typography, Box } from "@mui/material";
// import {  Contract } from "ethers";

// interface RoleAssignmentProps {
//   contract: Contract; // Define the type for the contract
// }
// //const RoleAssignment: React.FC<RoleAssignmentProps> = ({ contract }) => {
// const RoleAssignment = () => {
//   const [userAddress, setUserAddress] = useState("");
//   const [role, setRole] = useState("");

//   const assignRole = async () => {
//     try {
//       // const tx = await contract.assignRole(userAddress, role);
//       // await tx.wait();
//       alert("Role assigned successfully!");
//     } catch (error) {
//       console.error("Error assigning role:", error);
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h6">Assign Role</Typography>
//       <TextField
//         label="User Address"
//         value={userAddress}
//         onChange={(e) => setUserAddress(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Role (0: None, 1: Client, 2: Freelancer, 3: Business)"
//         value={role}
//         onChange={(e) => setRole(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       <Button variant="contained" onClick={assignRole}>
//         Assign Role
//       </Button>
//     </Box>
//   );
// };

// export default RoleAssignment;