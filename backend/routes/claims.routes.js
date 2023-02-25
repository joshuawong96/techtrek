import express from "express";
import {
    getAllClaims,
    createClaim,
} from "../controllers/insuranceClaimsController.js";

import {
    getPolicy
} from "../controllers/policyController.js";

const router = express.Router();

// Route to get all claims.
router.route("/getAllClaims").post(getAllClaims);
// router.route("/getAllClaims").post(getPolicy);

// Route to create claim.
router.route("/createClaim").post(createClaim);


export default router;