import express from "express";
import {
    getAllClaims,
    createClaim,
} from "../controllers/usersController.js";

const router = express.Router();

// Route to get all claims.
router.route("/getAllClaims").post(getAllClaims);

// Route to create claim.
router.route("/createClaim").post(createClaim);


export default router;