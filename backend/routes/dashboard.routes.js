import express from "express";
import { deleteClaim, getPolicy } from "../controllers/policyController.js";
import { getPrivateData } from "../controllers/privateController.js";
import { verifyAuthToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.route("/").get(verifyAuthToken, getPrivateData);

router.route("/deleteClaim").delete(verifyAuthToken, deleteClaim);

export default router;
