import express from "express";
import {
    changePasswordUser,
    createUser,
    deleteUser,
    forgetPasswordUser,
    loginUser,
} from "../controllers/usersController.js";

const router = express.Router();

// Route to sign out.
router.route("/signup").post(createUser);

// Route to sign in.
router.route("/signin").post(loginUser);

// Route to delete user.
router.route("/deleteuser").delete(deleteUser);

// Route to change password.
router.route("/changepassword").patch(changePasswordUser);

// TODO: Route to forgot password. Sends an email to user with the reset email.
router.route("/forgotpassword").post(forgetPasswordUser);

export default router;
