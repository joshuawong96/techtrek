import Claims from "../database/models/insuranceClaims.js";
import Policy from "../database/models/policies.js";
import { validateDeleteClaim } from "../validation/validatePolicySchema.js";

const ID_list = [];
const getPolicy = async (id, ID_list) => {
    const get_policies = await Policy.find({ employeeID: id }).select({
        insuranceID: 1,
        _id: 0,
    });

    for (let i = 0; i < get_policies.length; i++) {
        console.log(i);
        ID_list.push(get_policies[i].insuranceID);
    }
};

const deleteClaim = async (req, res) => {
    try {
        const { error } = validateDeleteClaim(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const claim = await Claims.findOne({ claimID: req.body.claimID });

        if (!claim) return res.status(404).send("Claim not found");

        await Claims.deleteOne({ claimID: req.body.claimID });
        res.status(202).send(claim);
    } catch (error) {
        res.status(500).send({ message: error });
    }
};

export { getPolicy, deleteClaim };
