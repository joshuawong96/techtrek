import User from "../database/models/users.js";
import Policy from "../database/models/policies.js";


const ID_list = [];
const getPolicy = async (req, res) => {
    
    const get_policies = await Policy.find({ employeeID: 58001002 }).select({ "insuranceID": 1, "_id": 0});
    

    for (let i=0; i < get_policies.length; i++) {
        ID_list[i] = get_policies[i].insuranceID;
    }
    
    //return get_policies
    //req.body.employeeID
}
export { ID_list }
export { getPolicy };