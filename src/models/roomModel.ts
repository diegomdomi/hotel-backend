import mongoose from "mongoose";
const { Schema } = mongoose;

const roomSchema = new Schema({
    id: Number,
    img: String,
    bed_type: String,
    room_floor: String,
    amenities: String,
    rate: String,
    status: String,
})


export const roomModel = mongoose.model('rooms', roomSchema);