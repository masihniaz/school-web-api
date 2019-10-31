const { check } = require('express-validator');

const existOptions = { checkNull: true, checkFalsy: true };

module.exports = [
  check('name')
    .exists(existOptions)
    .withMessage('name is a required field.')
    .isString()
    .withMessage('name must be a string.'),
  check('description')
    .exists(existOptions)
    .withMessage('description is a required field.')
    .isString()
    .withMessage('description should only contain alphabets.'),
  check('instructorId')
    .exists(existOptions)
    .withMessage('instructorId is a required field.')
    .isNumeric({ no_symbols: true })
    .withMessage('instructorId must be numeric and should not contain symbols.')
];
