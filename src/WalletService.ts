import { createUser, getUserByEmail } from "./models/UserModel";
import {
  createWallet,
  getWalletByUserId,
  updateWalletBalance,
} from "./models/WalletModel";

import { checkKarmaBlacklist } from "./KarmaBlacklist";
export const createAccount = async (
  username: string,
  email: string,
  password: string
) => {
  const isBlacklisted = await checkKarmaBlacklist(email);
  if (isBlacklisted) {
    throw new Error("User is blacklisted");
  }
  const user = await getUserByEmail(email);
  if (user) {
    throw new Error("User already exists");
  }
  const userId = await createUser({ username, email, password });
  await createWallet({ user_id: userId, balance: 0 });
  return userId;
};

export const fundAccount = async (user_id: number, amount: number) => {
  const wallet = await getWalletByUserId(user_id);
  if (!wallet) {
    throw new Error("Wallet not found");
  }
  const newBalance = wallet.balance + amount;
  await updateWalletBalance(user_id, newBalance);
  return newBalance;
};

export const transferFunds = async (
  fromUserId: number,
  toUserId: number,
  amount: number
) => {
  const fromWallet = await getWalletByUserId(fromUserId);
  const toWallet = await getWalletByUserId(toUserId);
  if (!fromWallet || !toWallet) {
    throw new Error("Wallet not found");
  }
  if (fromWallet.balance < amount) {
    throw new Error("Insufficient funds");
  }
  const newFromBalance = fromWallet.balance - amount;
  const newToBalance = toWallet.balance + amount;
  await updateWalletBalance(fromUserId, newFromBalance);
  await updateWalletBalance(toUserId, newToBalance);
  return { from: newFromBalance, to: newToBalance };
};

export const withdrawFunds = async (user_id: number, amount: number) => {
  const wallet = await getWalletByUserId(user_id);
  if (!wallet) {
    throw new Error("Wallet not found");
  }
  if (wallet.balance < amount) {
    throw new Error("Insufficient funds");
  }
  const newBalance = wallet.balance - amount;
  await updateWalletBalance(user_id, newBalance);
  return newBalance;
};
