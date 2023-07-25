import Joi from "joi";

export const ValidateBloodCamp = (bloodCampObject) => {
    const Schema = Joi.object({
        state: Joi.string().required(),
        district: Joi.string().required(),
    });

    return Schema.validateAsync(bloodCampObject);
};

export const ValidateSearchString = (bloodCampObject) => {
    const Schema = Joi.object({
        searchString: Joi.string().required(),
    });

    return Schema.validateAsync(bloodCampObject);
};