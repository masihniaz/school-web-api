const { check } = require('express-validator');

const existOptions = { checkNull: true, checkFalsy: true };

module.exports = [
  check('name')
    .exists(existOptions)
    .withMessage('name is a required field.')
    .isString()
    .withMessage('name must be a string.'),
  check('lastName')
    .exists(existOptions)
    .withMessage('lastName is a required field.')
    .isString()
    .withMessage('lastName must be a string.'),
  check('email')
    .exists(existOptions)
    .withMessage('email is a required field')
    .isEmail()
    .withMessage('Email address is invalid.'),
  check('address')
    .exists(existOptions)
    .withMessage('address is a required field.'),
  check('birthday')
    .exists(existOptions)
    .withMessage('birthday is a required field.'),
  check('phoneNumber')
    .exists(existOptions)
    .withMessage('phoneNumber is a required field.')
    .isNumeric({ no_symbols: true })
    .withMessage('phoneNumber must be numeric and should not contain symbols.')
];
