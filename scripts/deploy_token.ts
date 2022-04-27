import hre, { ethers } from "hardhat";
import addressUtil from "../utils/addressUtil";

export default async function deployToken() {
  const addressList = await addressUtil.getAddressList(hre.network.name);

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy(
    "Name",
    "Symbol",
    18,
    addressList["Committee"],
    addressList["AdminKAP20Router"],
    addressList["KYC"],
    1
  );

  await token.deployTransaction.wait();
  await addressUtil.saveAddresses(hre.network.name, {
    Token: token.address,
  });
}
