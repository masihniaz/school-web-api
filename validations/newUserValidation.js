const { check } = require('express-validator');
const existOptions = { checkNull: true, checkFalsy: true};

module.exports = [
  check('name')
    .exists(existOptions).withMessage('name is a required field.')
    .isString().withMessage('name must be a string.'),
  check('email')
    .exists(existOptions).withMessage('email is a required field')
    .isEmail().withMessage('email address is invalid.'),
  check('password')
    .exists(existOptions).withMessage('password is a required field.')
    .isLength({ min: 5 }).withMessage('password must be at least 5 characters.'),
  check('passwd')
    .exists(existOptions).withMessage('passwd is a required field.')
    .isLength({ min: 5 }).withMessage('passwd must be at least 5 characters.'),
  check('role')
    .exists(existOptions).withMessage('role is a required field.')
    .isNumeric({ no_symbols: true}).withMessage('role must be numeric and should not contain symbols.')
];