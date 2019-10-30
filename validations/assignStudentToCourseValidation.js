const { check } = require('express-validator');
const existOptions = { checkNull: true, checkFalsy: true};

module.exports = [
  check('studentId')
    .exists(existOptions).withMessage('studentId is a required field.')
    .isNumeric({ no_symbols: true}).withMessage('studentId must be numeric and should not contain symbols.'),
  check('courseId')
    .exists(existOptions).withMessage('courseId is a required field.')
    .isNumeric({ no_symbols: true}).withMessage('courseId must be numeric and should not contain symbols.')
];