import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { routerLogin,routerBookings,routerUsers,routerRooms } from './routes';
require('./auth')

const PORT = process.env.PORT || 3001;
const app = express()
app.use(cors())
app.use(express.json())
app.use('/login',routerLogin)

app.listen(PORT, () => console.log(`Listo el puerto ${PORT}`))