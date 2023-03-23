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

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sql2023',
  database: 'hotelmiranda'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err:any, rows:any, fields:any) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()

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