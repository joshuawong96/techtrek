import User from "../database/models/users.js";
import Policy from "../database/models/policies.js";



const getPolicy = async (req, res) => {
    
    const get_policies = await Policy.find({ employeeID: 58001002 }).select({ "insuranceID": 1, "_id": 0});
    console.log(get_policies)
    //return get_policies
    //req.body.employeeID
}
//export { get_policies }
export { getPolicy };