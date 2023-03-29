import { Router } from 'express';
// import { getBooking, getBookings, postBooking, updateBooking, deleteBooking } from '../controllers/bookings'
import { getBooking } from '../controllers/bookings'

const routerBookings = Router()
// routerBookings.get("/", getBookings);
routerBookings.get("/:bookingid", getBooking);
// routerBookings.put("/:bookingid", updateBooking);
// routerBookings.post("/", postBooking);
// routerBookings.delete("/:bookingid", deleteBooking);
export { routerBookings }





