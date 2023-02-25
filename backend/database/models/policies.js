import crypto from "crypto";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const policySchema = new mongoose.Schema({
    // loginID: { type: String, required: true },
    insuranceID: { type: Number, required: true, unique: true },
    employeeID: { type: Number, required: true },
    insuranceType: { type: String, required: true },
    policyStartDate: { type: Date, required: true },
    policyTerm: { type: String, required: true },
    policyEndDate: { type: String, required: true },
    claimLimit: { type: Number, required: true },
    remainingClaimLimit: { type: Number, required: true },
});

const Policy = mongoose.model("policy", policySchema);
export default Policy;