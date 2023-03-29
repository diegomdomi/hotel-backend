import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    id: Number,
    img: String,
    password: String,
    email: String,
    first_Name: String,
    job_desc: String,
    schedule: Date,
    contact: String,
    status: String,
})


export const userModel = mongoose.model('user', userSchema);