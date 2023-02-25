import bcrypt from "bcrypt";

import User from "../database/models/users.js";
import sendEmail from "../utils/sendEmail.js";
import {
    validateChangePassword,
    validateEmail,
    validateSignIn,
    validateSignUp,
} from "../validation/validateUserSchema.js";

// Create a new user account and save to the database.
const createUser = async (req, res) => {
    try {
        const { error } = validateSignUp(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (user)
            return res
                .status(409)
                .send({ message: "User with given email already exists" });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        await new User({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        res.status(500).send({ message: error });
    }
};

const loginUser = async (req, res) => {
    try {
        const { error } = validateSignIn(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        // Check for loginID / email.
        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res
                .status(401)
                .send({ message: "Invalid Email or Password" });

        // Check for password
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword)
            return res
                .status(401)
                .send({ message: "Invalid Email or Password" });

        // Generate a authentication token and returns to the user.
        const token = user.generateAuthToken(req.body.email);
        res.status(200).send({
            data: token,
            message: "Logged in successfully",
        });
    } catch (error) {
        res.status(500).send({ message: error });
    }
};

// TODO: Feature to reset password by sending a reset email. Does not work with the current service.
const forgetPasswordUser = async (req, res) => {
    try {
        const { error } = validateEmail(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });

        if (!user)
            res.status(404).send({
                message: "Unable to send email to address",
            });

        const resetToken = user.generateResetPasswordToken();
        await user.save();

        const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

        // HTML for reset email.
        const message = `
            <h1>Password Reset</h1>
            <p>Click link to reset password</p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `;
        try {
            sendEmail({
                to: user.email,
                subject: "Password Reset Request",
                text: message,
            });
            res.status(200).json({
                data: "Email Sent Successfully",
            });
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();
            return res
                .status(500)
                .send({ message: "Email could not be sent." });
        }
    } catch (error) {
        res.status(500).send({ message: error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { error } = validateSignIn(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        // Check for loginID / email.
        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res
                .status(401)
                .send({ message: "Invalid Email or Password" });

        // Check for password
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword)
            return res
                .status(401)
                .send({ message: "Invalid Email or Password" });

        await User.deleteOne({ email: req.body.email });
        res.status(200).send({
            message: "Deleted account successfully",
        });
    } catch (error) {
        res.status(500).send({ message: error });
    }
};

const changePasswordUser = async (req, res) => {
    try {
        const { error } = validateChangePassword(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        // Check for loginID / email.
        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res
                .status(401)
                .send({ message: "Invalid Email or Password" });

        // Check for current password
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword)
            return res
                .status(401)
                .send({ message: "Invalid Email or Password" });

        // Encrypt new password
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const newPassword = await bcrypt.hash(req.body.newPassword, salt);

        await User.findOneAndUpdate(
            { email: req.body.email },
            { password: newPassword }
        );
        res.status(200).send({
            message: "Changed password of account successfully",
        });
    } catch (error) {
        res.status(500).send({ message: error });
    }
};

export {
    createUser,
    loginUser,
    deleteUser,
    changePasswordUser,
    forgetPasswordUser,
};
