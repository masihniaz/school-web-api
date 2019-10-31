const { check } = require('express-validator');

const existOptions = { checkNull: true, checkFalsy: true };

module.exports = [
  check('email')
    .exists(existOptions)
    .withMessage('email is a required field')
    .isEmail()
    .withMessage('email address is invalid.'),
  check('password')
    .exists(existOptions)
    .withMessage('password is a required field.')
];
