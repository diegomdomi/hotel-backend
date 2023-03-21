import { IUser} from './interfaces/userInterface'
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const user:IUser = {
    email: 'usuario1@1.com',
    password: '111'  
}

passport.use(
    'login',
    new localStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email:string, password:string, done:Function) => {
        try {
          console.log(email);
          if (user.email !== email || user.password !== password) {
            return done(null, false, { message: 'User not found' });
          }
  
          return done(null, user, { message: 'Logged in Successfully' });
        } catch (error) {
          return done(error);
        }
      }
    )
  );



passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.TOP_SECRET,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token: any, done:Function) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);