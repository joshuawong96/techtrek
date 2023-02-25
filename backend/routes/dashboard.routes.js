import express from "express";
import { getPrivateData } from "../controllers/privateController.js";
import { verifyAuthToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.route("/").get(verifyAuthToken, getPrivateData);

export default router;
