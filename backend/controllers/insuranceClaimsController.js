import Claims from "../database/models/insuranceClaims.js";
import Policies from "../database/models/policies.js";


const findClaims = async (req, res) => {
    try {
        const { error } = validatePolicy(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        // Check for claims

        const claims = policies.find({
            "_policies": {}
        }) 



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