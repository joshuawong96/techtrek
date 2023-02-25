import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

// Validates the data(body) of request when signing up.
const validateSignUp = (data) => {
    const schema = Joi.object({
        employeeID: Joi.number().required().label("EmployeeID"),
        password: passwordComplexity().required().label("Password"),
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        age: Joi.number().required().label("Age")
    });
    return schema.validate(data);
};

// Validates email and password of a user when signing in.
const validateSignIn = (data) => {
    const schema = Joi.object({
        employeeID: Joi.number().required().label("EmployeeID"),
        password: Joi.string().required().label("Password")
    });
    return schema.validate(data);
};

// Validates email, password and newPassword of a user when changing password.
const validateChangePassword = (data) => {
    const schema = Joi.object({
        employeeID: Joi.number().required().label("EmployeeID"),
        password: Joi.string().required().label("Password"),
        newPassword: passwordComplexity().required().label("New Password"),
    });
    return schema.validate(data);
};

// Validates employeeID of user.
const validateEmployeeID = (data) => {
    const schema = Joi.object({
        employeeID: Joi.number().required().label("EmployeeID"),
    });
    return schema.validate(data);
};

export {
    validateSignUp,
    validateSignIn,
    validateChangePassword,
    validateEmployeeID
};
