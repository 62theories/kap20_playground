import hre, { ethers } from "hardhat";
import addressUtil from "../utils/addressUtil";

export default async function deployGreeter() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");
  await greeter.deployTransaction.wait();
  await addressUtil.saveAddresses(hre.network.name, {
    Greeter: greeter.address,
  });
}
