import mongoose from "mongoose";
const { Schema } = mongoose;

const bookingSchema = new Schema({
    id: Number,
    name : String,
    img: String,
    guest: String,
    order_date: Date,
    check_in: Date,
    check_out: Date,
    special_request: String,
    room_type: String,
    status: String,

})


export const bookingModel = mongoose.model('bookings', bookingSchema);

