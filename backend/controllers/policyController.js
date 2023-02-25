import User from "../database/models/users.js";
import Policy from "../database/models/policies.js";



const getPolicy = async (id, ID_list)=>  {
    const get_policies = await Policy.find({ employeeID: id }).select({ "insuranceID": 1, "_id": 0});
    //console.log(get_policies.length)

    for (let i=0; i < get_policies.length; i++) {
        console.log(i)
        ID_list.push(get_policies[i].insuranceID);
    }
    //console.log(ID_list)
    //return get_policies
    //req.body.employeeID
    return ID_list
}
export { 
    // ID_list, 
    getPolicy};
