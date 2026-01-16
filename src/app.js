import express from "express";
import dotenv from "dotenv";
import router from "./routes/healthRoute.js";

const app = express();

dotenv.config();

app.use(router);

export default app;
