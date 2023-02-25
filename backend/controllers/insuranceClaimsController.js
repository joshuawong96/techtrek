<<<<<<< Updated upstream
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


=======
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
>>>>>>> Stashed changes

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