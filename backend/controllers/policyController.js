import User from "../database/models/users.js";
import Policy from "../database/models/policies.js";



const getPolicy = async (req, res) => {
    const ID_list = [];
    const get_policies = await Policy.find({ employeeID: req.body.employeeID }).select({ "insuranceID": 1, "_id": 0});
    

    for (let i=0; i < get_policies.length; i++) {
        ID_list[i] = get_policies[i].insuranceID;
    }

    return ID_list
    //return get_policies
    //req.body.employeeID
}
export { 
    // ID_list, 
    getPolicy};
