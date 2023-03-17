import { NextFunction, Request, Response } from "express";

const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();
// ...

router.post(
  '/',
  async (req:any, res:Response, next:NextFunction) => {
    passport.authenticate(
      'login',
      async (err:any, user:any, info:any) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');

            return next(error);
          }

          req.login(
            user,
            { session: false },
            async (error:any) => {
              if (error) return next(error);

              const body = { _id: user._id, email: user.email };
              const token = jwt.sign({ user: body }, 'TOP_SECRET');

              return res.json({ token });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);

module.exports = router;