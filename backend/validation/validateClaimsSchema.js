import Joi from "joi";


// Validates the data(body) of request when signing up.
const validateCreateClaim = (data) => {
    const schema = Joi.object({
        claimID: Joi.number().required().label("ClaimID"),
        insuranceID: Joi.number().required().label("InsuranceID"),
        firstName: Joi.string().required().label("FirstName"),
        lastName: Joi.string().required().label("LastName"),
        expenseDate: Joi.number().required().label("ExpenseDate"),
        amount: Joi.number().required().label("Amount"),
        purpose: Joi.string().required().label("purpose"),
        followUp: Joi.boolean().required().label("FollowUp"),
        previousClaimID: Joi.number().required().label("PreviousClaimID"),
        amount: Joi.number().required().label("Amount"),
        status: Joi.string().required().label("Status"),
        lastEditedClaimDate: Joi.string().required().label("LastEditedClaimDate"),

    });
    return schema.validate(data);
};

// Validates email and password of a user when signing in.
const validateEditClaim = (data) => {
    const schema = Joi.object({
        claimID: Joi.number().required().label("ClaimID"),
        insuranceID: Joi.number().required().label("InsuranceID"),
        firstName: Joi.string().required().label("FirstName"),
        lastName: Joi.string().required().label("LastName"),
        expenseDate: Joi.number().required().label("ExpenseDate"),
        amount: Joi.number().required().label("Amount"),
        purpose: Joi.string().required().label("purpose"),
        followUp: Joi.boolean().required().label("FollowUp"),
        previousClaimID: Joi.number().required().label("PreviousClaimID"),
        amount: Joi.number().required().label("Amount"),
        status: Joi.string().required().label("Status"),
        lastEditedClaimDate: Joi.string().required().label("LastEditedClaimDate"),
    });
    return schema.validate(data);
};


export {
    validateCreateClaim,validateEditClaim

};