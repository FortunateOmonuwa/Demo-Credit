import express from "express";
import walletRoutes from "./routes/WalletRoutes";
import { authMiddleware } from "./middlewares/AuthMiddleware";

const app = express();

app.use(express.json());
app.use(authMiddleware);
app.use("/api/wallet", walletRoutes);

export default app;
