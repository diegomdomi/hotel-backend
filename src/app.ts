import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { routerLogin,routerBookings,routerUsers,routerRooms } from './routes';
const passport = require('passport');
require('./auth')

const PORT = process.env.PORT || 3001;
const app = express()
app.use(cors())
app.use(express.json())


app.use('/login',routerLogin)

app.use("/bookings",
passport.authenticate("jwt", { session: false }),
routerBookings)

app.use(
    "/rooms",
    passport.authenticate("jwt", { session: false }),
    routerRooms
  );
  app.use(
    "/users",
    passport.authenticate("jwt", { session: false }),
    routerUsers
  );



app.listen(PORT, () => console.log(`Listo el puerto ${PORT}`))