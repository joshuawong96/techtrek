import crypto from "crypto";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const claimSchema = new mongoose.Schema({
    // loginID: { type: String, required: true },
    claimID: { type: String, required: true, unique: true },
    insuranceID: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    expenseDate: { type: Date }, // Token used to validate when resetting password.
    amount: { type: Number }, // Expiration date for resetting password.
    purpose:{ type: String},
    followUp: { type: Boolean},
    previousClaimID:{ type: Number },
    status:{ type: String},
    lastEditedClaimDate:{ type: String},
    receiptNo:{ type: Number, required: true},
});


const Claims = mongoose.model("claims", claimSchema);
export default Claims;
