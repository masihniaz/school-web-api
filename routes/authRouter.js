const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const { validationResult } = require('express-validator');
const newUserValidation = require('../validations/newUserValidation');
const loginValidation = require('../validations/loginValidation');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const jwtOpt = { session: false };

const isPasswordValid = (candidatePassword, hashedPassword) => new Promise((resolve, reject) => {
  bcrypt.compare(candidatePassword, hashedPassword, (err, isMatch) => {
    if (err) reject(err);
    resolve(isMatch);
  });
});

function routes(User) {
  const authRouter = express.Router();
  // get list of users
  authRouter.route('/auth/users', passport.authenticate('jwt', jwtOpt))
    .get(async (req, res) => {
      const users = await User.findAll();
      // 200 OK
      return res.status(200).json(users);
    });
  // add new user
  authRouter.route('/auth/user', passport.authenticate('jwt', jwtOpt))
    .post(newUserValidation, async (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        // 422 Unprocessable Entity
        return res.status(422).json({ errors: errors.array() });
      }

      try {
        const user = await User.findAll({ where: { email: req.body.email } });

        if (user.length) {
          // 409 conflict
          return res.status(409).json({ error: `user with email id ${req.body.email} already exists` });
        }

        // 201 created
        const newUser = await User.create(req.body);
        return res.status(201).json(newUser);
      } catch (e) {
        console.log(e);
        // 500 internal server error
        return res.status(500);
      }
    });
  
  authRouter.route('/auth/user/:id', passport.authenticate('jwt', jwtOpt))
    .get(async (req, res) => {
      const user = await User.findOne({ where: { id: req.params.id } });

      if (!user) {
        // 404 bad request
        return res.status(404).json(user);
      }
      // 200 OK
      const { id, name, email, role } = user;
      return res.status(200).json({ id, name, email, role });
    })
    .patch(async (req, res) => {
      const user = await User.findOne({ where: { id: req.params.id } });
      if (user) {
        user.update(req.body);
        // 200 OK
        return res.status(200).json(user);
      }
      // 404 bad request
      return res.status(404).json({ error: `cannot find user with id ${req.params.id}` });
    })
    .delete(async (req, res) => {
      const user = await User.findOne({ where: { id: req.params.id } });

      if (user) {
        // hard delete
        await user.destroy({ force: true });
        // 200 OK
        return res.status(200).json(user);
      }
      // 404 bad request
      return res.status(404).json({ error: `cannot find user with id ${req.params.id}.` });
    })

  authRouter.route('/auth/login')
    .post(loginValidation, async (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        // 422 Unprocessable Entity
        return res.status(422).json({ errors: errors.array() });
      }

      const user = await User.findOne({ where: { email: req.body.email } });

      // 404 not found
      if (!user) {
        return res.status(404).json({ error: 'user not found.' });
      }

      const isMatch = await isPasswordValid(req.body.password, user.password);

      if (!isMatch) {
        // 400 bad request
        return res.status(400).json({ error: 'incorrect username or password.' });
      }
      // excluding hashed password from user
      const {
        id, name, email, role
      } = user;
      const jwtPayloadToSign = {
        id, name, email, role
      };
      const token = jwt.sign(jwtPayloadToSign, config.jwtSecret, { expiresIn: 1200 }); // 20 minutes expiry time
      // 200 OK
      return res.status(200).json({ token });
    });

  return authRouter;
}

module.exports = routes;
