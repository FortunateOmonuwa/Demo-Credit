import db from "../database/connection";

export interface Wallet {
  id?: number;
  user_id: number;
  balance: number;
}

export const createWallet = async (wallet: Wallet) => {
  const [id] = await db("wallets").insert(wallet);
  return id;
};

export const getWalletByUserId = async (user_id: number) => {
  return await db("wallets").where({ user_id }).first();
};

export const updateWalletBalance = async (user_id: number, amount: number) => {
  return await db("wallets").where({ user_id }).update({ balance: amount });
};
