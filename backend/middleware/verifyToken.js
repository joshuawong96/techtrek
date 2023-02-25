import jwt from "jsonwebtoken";
import User from "../database/models/users.js";

// Verify the given authentication token using JWT.
const verifyAuthToken = async function (req, res, next) {
    let token;

    // Check if our request header contains the Authorization Bearer token.
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    // In the event of an invalid token, we deny access.
    if (!token) {
        return req.status(401).send({ message: "Not an authorized user." });
    }

    // Decode the JWT and find the decoded user id in DB.
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return req
                .status(404)
                .send({ message: "User with this id cannot be found." });
        }

        // Assign the authenticated user back to the request.
        req.user = user;
        next();
    } catch (error) {
        req.status(401).send({ message: error });
    }
};

export { verifyAuthToken };
