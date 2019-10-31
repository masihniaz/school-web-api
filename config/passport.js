const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const env = process.env.NODE_ENV || 'development';
const config = require('./config.json')[env];

// using JwtStrategy for token-based authentication
module.exports = function(passport, User){
  var options = {}

  // options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt")
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  options.secretOrKey = config.jwtSecret;

  passport.use(new JwtStrategy(options, async(jwt_payload, done) => {

    const user = await User.findOne({ where: { email: jwt_payload.email } });
    if(!user) {
      console.log('user not found!');
      done(err, false);
    }

    console.log('user found!');
    
    if(user) {
      done(null, user);
    }
    
  }));
};