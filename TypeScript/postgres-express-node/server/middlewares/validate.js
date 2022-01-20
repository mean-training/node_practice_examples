import {body, validationResult}  from 'express-validator/check';
const validationRule = () => {
  return [
    body('title')
    .exists()
    .isString()
    .isLength({min:3})
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  console.log(console.errors);
  console.log(errors)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
    validationRule,
    validate,
}