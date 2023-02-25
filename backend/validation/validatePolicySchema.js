import Joi from "joi";

const validateDeleteClaim = (data) => {
    const schema = Joi.object({
        claimID: Joi.number().required().label("claimID"),
    });
    return schema.validate(data);
};

export { validateDeleteClaim };
