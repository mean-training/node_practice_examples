"use strict";
const check_1 = require("express-validator/check");
const validationRule = () => {
    return [
        (0, check_1.body)('title')
            .exists()
            .isString()
            .isLength({ min: 3 })
    ];
};
const validate = (req, res, next) => {
    const errors = (0, check_1.validationResult)(req);
    console.log(console.errors);
    console.log(errors);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
    return res.status(422).json({
        errors: extractedErrors,
    });
};
module.exports = {
    validationRule,
    validate,
};
//# sourceMappingURL=validate.js.map