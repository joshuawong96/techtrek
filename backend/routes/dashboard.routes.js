import express from "express";
import { getPrivateData } from "../controllers/privateController.js";
import { verifyAuthToken } from "../middleware/verifyToken.js";
import {
    getPolicy
} from "../controllers/policyController.js";


const router = express.Router();

router.route("/").get(verifyAuthToken, getPrivateData);

router.route("/getAllClaims").post(verifyAuthToken, getPolicy);

export default router;
