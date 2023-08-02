import { ethers } from "ethers";

const address1 = "0xfe5726d4ec5724bb4461eec60860f4804e4e5b1b";
const address2 = "0xfE5726d4Ec5724bB4461EEC60860F4804E4E5B1b";

const normalizedAddress1 = ethers.getAddress(address1);
const normalizedAddress2 = ethers.getAddress(address2);

const areEqual = normalizedAddress1 === normalizedAddress2;

console.log("Address 1:", normalizedAddress1);
console.log("Address 2:", normalizedAddress2);
console.log("Are addresses equal?", areEqual);
