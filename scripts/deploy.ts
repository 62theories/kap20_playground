// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
// import { deployAdminKAP20 } from "./deploy_admin_kap20";
import deployGreeter from "./deploy_greeter";
import deployToken from "./deploy_token";

async function main() {
  // deployGreeter();
  // deployAdminKAP20()
  deployToken();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
