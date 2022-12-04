const Joi = require("joi");

const userDTO = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  role: Joi.string(),
});

module.exports = {
  userDTO,
};
