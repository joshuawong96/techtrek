import User from "../database/models/users.js";

const getPrivateData = async (req, res) => {
    res.status(200).json({
        data: `Access granted to ${req.user.firstName}  ${req.user.lastName}`,
    });
};

export { getPrivateData };
