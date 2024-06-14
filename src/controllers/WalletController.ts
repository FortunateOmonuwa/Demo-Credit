import { Request, Response } from "express";
import {
  createAccount,
  fundAccount,
  transferFunds,
  withdrawFunds,
} from "../WalletService";

export const createAccountController = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const userId = await createAccount(username, email, password);
    res.status(201).json({ userId });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const fundAccountController = async (req: Request, res: Response) => {
  const { user_id, amount } = req.body;
  try {
    const newBalance = await fundAccount(user_id, amount);
    res.status(200).json({ newBalance });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const transferFundsController = async (req: Request, res: Response) => {
  const { fromUserId, toUserId, amount } = req.body;
  try {
    const balances = await transferFunds(fromUserId, toUserId, amount);
    res.status(200).json(balances);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const withdrawFundsController = async (req: Request, res: Response) => {
  const { user_id, amount } = req.body;
  try {
    const newBalance = await withdrawFunds(user_id, amount);
    res.status(200).json({ newBalance });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
