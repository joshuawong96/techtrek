import Claims from "../database/models/insuranceClaims.js";
import Policies from "../database/models/policies.js";
import {getPolicy} from "./policyController.js"



const getAllClaims = async (req, res) => {
    try {
        console.log(req.body)
        // const { error } = validatePolicy(req.body);
        // if (error)
        //     return res.status(400).send({ message: error.details[0].message });
        
        // Check for claims.
        // Function to find all claims that belong to a particular policy

        // const ID_list = getPolicy(req, res)
        console.log(ID_list)
        // await Policies.find({ insuranceID: { $in: ID_list } }, 'claims', (err, policies) => {
        //     if (err) {
        //       console.error(err);
        //       return;
        //     }
        //     const claims = policies.map(policy => policy.claims).flat();
        //     console.log(claims);
        //   });
        }
    catch (error) {
        res.status(500).send({ test: error });
    }
};

const createClaim = async (req, res) => {
    try {
        // console.log(req.body)
        const { error } = validateSignUp(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const claims = await Claims.findOne({ claimID: req.body.claimID });
        if (user)
            return res
                .status(409)
                .send({ message: "claimID already exists" });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        await new claims({ ...req.body, claimID }).save();
        res.status(201).send({ message: "Claim created successfully" });
    } catch (error) {
        res.status(500).send({ test: error });
    }
};

export {
    getAllClaims,
    createClaim,
};