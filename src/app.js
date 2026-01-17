import express from "express";
import dotenv from "dotenv";
import { connectMongo } from "./config/mongo/mongoConfig.js";
import healthRoutes from "./routes/healthRoute.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

connectMongo();

app.use(healthRoutes);
app.use(userRoutes);

export default app;
