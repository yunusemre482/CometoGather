const Joi = require("@hapi/joi");

const signUpValidation = (user) => {
  const schema = Joi.object({
    firstname: Joi.string().min(5).max(30).required(),

    lastname: Joi.string().min(5).max(30).required(),
    username: Joi.string().min(5).alphanum().max(50).required(),
    phoneNumber:Joi.string().min(11).max(11),
    email: Joi.string().email().min(5).max(50).required(),
    userType: Joi.string().required(),
    gender: Joi.string().required(),
    password: Joi.string().min(3).max(15).required(),
    birthDate:Joi.date()
  }).options({ abortEarly: false });

  return schema.validate(user);
};
const signInValidation = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().min(5).max(50).required(),

    password: Joi.string().min(3).max(20).required(),
  }).options({ abortEarly: false });

  return schema.validate(user);
};

module.exports.signInValidation = signInValidation;
module.exports.signUpValidation = signUpValidation;
