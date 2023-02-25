import User from "../database/models/users.js";
import Policy from "../database/models/policies.js";



const getPolicy = async (req, res) => {
    
    const get_policies = await Policy.find({ employeeID: 58001002 }).select({ "insuranceID": 1, "_id": 0});
    const ID_list = [];

    for (let i=0; i < get_policies.length; i++) {
        ID_list[i] = get_policies[i].insuranceID;
    }
    console.log(ID_list)
    //return get_policies
    //req.body.employeeID
}
//export { get_policies }
export { getPolicy };