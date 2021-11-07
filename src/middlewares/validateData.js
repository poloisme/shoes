const Joi = require("joi");

const validateBody = (schema) => {
  return (req, res, next) => {
    const validateResult = schema.validate(req.body);
    if (validateResult.error) {
      const err = new Error(validateResult.error);
      err.status = 400;
      return next(err);
    } else {
      req.body = {
        ...validateResult.value,
      };
      next();
    }
  };
};

const validateParam = (schema, param) => {
  return (req, res, next) => {
    const validateResult = schema.validate({ param: req.params[param] });
    if (validateResult.error) {
      const err = new Error(validateResult.error);
      err.status = 400;
      return next(err);
    } else {
      req.params[param] = validateResult.value.param;
      next();
    }
  };
};

const schemas = {
  idUserSchema: Joi.object({
    param: Joi.string().pattern(new RegExp("^(0|[1-9][0-9]*)$")).required(),
  }),
  userSchemaSignUp: Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
  }),
  userSchemaSignIn: Joi.object({
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
  }),
  userSchemaUpdate: Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    status: Joi.number().valid(1, 10),
  }),
  userSchemaCreate: Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    status: Joi.number().valid(1, 10),
    role_id: Joi.number().valid(1, 2, 3, 4),
  }),
};

module.exports = {
  schemas,
  validateBody,
  validateParam,
};
