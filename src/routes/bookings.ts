import { Router } from 'express';
import { getBooking, getBookings, postBooking, updateBooking, deleteBooking } from '../controllers/bookings'

const router = Router()
router.get("/", getBookings);
router.get("/:bookingid", getBooking);
router.put("/:bookingid", updateBooking);
router.post("/", postBooking);
router.delete("/:bookingid", deleteBooking);
export { router }





