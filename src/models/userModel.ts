import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    id: Number,
    img: String,
    password: String,
    email: String,
    first_name: String,
    job_desk: String,
    schedules: Date,
    contact: String,
    status: String,
})


export const userModel = mongoose.model('users', userSchema);