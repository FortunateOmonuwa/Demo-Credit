import { Router } from "express";
import {
  createAccountController,
  fundAccountController,
  transferFundsController,
  withdrawFundsController,
} from "../controllers/WalletController";

const router = Router();

router.post("/create-account", createAccountController);
router.post("/fund-account", fundAccountController);
router.post("/transfer-funds", transferFundsController);
router.post("/withdraw-funds", withdrawFundsController);

export default router;
