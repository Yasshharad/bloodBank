import Joi from "joi";

export const ValidateBloodBank = (bloodBankObject) => {
    const Schema = Joi.object({
        state: Joi.string().required(),
        district: Joi.string().required(),
        city: Joi.string().required(),
    });

    return Schema.validateAsync(bloodBankObject);
};

export const ValidateSearchString = (bloodBankObject) => {
    const Schema = Joi.object({
        searchString: Joi.string().required(),
    });

    return Schema.validateAsync(bloodBankObject);
};