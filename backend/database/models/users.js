import crypto from "crypto";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // loginID: { type: String, required: true },
    // email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true},
    resetPasswordToken: { type: String }, // Token used to validate when resetting password.
    resetPasswordExpire: { type: Date }, // Expiration date for resetting password.
});

// Generate an authentication token using JWT.
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        {
            id: this._id,
        },
        process.env.JWT_SECRET,
        {
            algorithm: "HS256",
            expiresIn: process.env.JWT_EXPIRATION,
        }
    );
    return token;
};

userSchema.methods.generateResetPasswordToken = function () {
    // Generate a crypto token and hash it.
    const token = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");
    this.resetPasswordExpire = Date.now() + 10 * 60000; // Expires after 10mins.
    return token;
};

const User = mongoose.model("user", userSchema);
export default User;
