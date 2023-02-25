import crypto from "crypto";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const policySchema = new mongoose.Schema({
    // loginID: { type: String, required: true },
    insuranceID: { type: Number, required: true, unique: true },
    employeeID: { type: Number, required: true },
    insuranceType: { type: String, required: true },
    startDate: { type: Date, required: true },
    term: { type: String, required: true },
    endDate: { type: String, required: true },
    claimLimit: { type: Number, required: true },
    remainingClaim: { type: Number, required: true }

});

const Policy = mongoose.model("policy", policySchema);
export default Policy;
