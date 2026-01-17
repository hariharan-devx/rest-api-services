import express from "express";
import { getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/users/listUsers", getUsers);

export default router;
