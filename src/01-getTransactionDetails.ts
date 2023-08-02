import { ethers } from "ethers";
import { provider } from ".";

async function getTransactionDetails(transactionHash: string) {
  const transaction = await provider.getTransaction(transactionHash);

  console.log(transaction);

  if (!transaction) return;

  console.log("Transaction Details:");
  console.log("Hash:", transaction.hash);
  console.log("Block Number:", transaction.blockNumber);
  console.log("From:", transaction.from);
  console.log("To:", transaction.to);
  console.log("Value:", ethers.formatEther(transaction.value));
  console.log("Gas Limit:", transaction.gasLimit.toString());
  console.log("Gas Price:", ethers.formatUnits(transaction.gasPrice, "gwei"));
  console.log("Data:", transaction.data);
}

// 0.5 eth
// getTransactionDetails(
//   "0x792c6f6944c6bd69f23eb42552f25da30133156bac7722706109350ce08d8ce4"
// );

// use contract, no money, only gas fee
getTransactionDetails(
  "0x2076cfaea5e9f2582750988f34484b9270ea3e1b014587a3a62dfcdfdd357585"
);

// run this file use command: ts-node src/01-getTransactionDetails.ts
