import Claims from "../database/models/insuranceClaims.js";
import Policies from "../database/models/policies.js";
import {getPolicy} from "./policyController.js"



const getAllClaims = async (req, res) => {
    try {
        console.log(req.body.employeeID)
        console.log("hello world")
    
        // //const { error } = validatePolicy(req.body);
        // if (error)
        //     return res.status(400).send({ message: error.details[0].message });
        
        // // Check for claims.
        // // Function to find all claims that belong to a particular policy
        var ID_list = []
        const result = await getPolicy(req.body.employeeID, ID_list)
        console.log(result)
        // const claim_id = await Claims.find({ insuranceID: { $in: ID_list } }, 'claims', (err, policies) => {
        //     console.log(claim_id)
        //     if (err) {
        //       console.error(err);
        //       return;
        //     }
        //     const claims = policies.map(policy => policy.claims).flat();
        //     console.log(claims);
        //   });
        // }
        const claim_id = await Claims.find({ insuranceID: { $in: ID_list } }).select({ "claimID": 1, "_id": 0})
        console.log(claim_id)
        const claim_list = []
        for (let i=0; i < claim_id.length; i++) {
            claim_list.push(parseInt(claim_id[i].claimID));
        }
        console.log(claim_list)
        res.status(201).send({ claimID: claim_list });
    }
    catch (error) {

        //res.status(500).send({ test: error });
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