import mongoose from "mongoose";
import { handleHttp } from "../utils/error.handle";
import { Request, Response, NextFunction } from 'express';
import { Bookings } from "../interfaces/bookingsDb";
import { bookingModel } from "../models/bookingModel";


const connect = require('../database/connectionMongo');
const disconnect = mongoose.disconnect;

const getBooking = async (req:Request, res:Response,next: NextFunction): Promise<void> =>{
    try{
        const idBooking = req.params.bookingid;
        await connect();
        const booking: Bookings | unknown = await bookingModel.findOne({ id: idBooking });
        res.json({success: true, data: booking});
    } catch (e){
        next(e);
        handleHttp(res,'ERROR_GET_ITEM');
    }
    await disconnect();
};

const getBookings = async (req:Request, res:Response, next:NextFunction): Promise<void> =>{
    try{
        await connect();
        const bookings: Bookings | unknown = await bookingModel.find();
        res.json({success: true, data: bookings});
    } catch (e){
        next(e);
        handleHttp(res,'ERROR_GET_ITEMS');
    }
    await disconnect();
};

const updateBooking = async (req:Request, res:Response, next:Function): Promise<void> =>{
    try{
        const idBooking = req.params.bookingid;
        await connect();    
        await bookingModel.findOneAndUpdate({id:idBooking},req.body,{new:true});
        res.json({ success: true, data: idBooking});
    } catch (e){
        next(e);
        handleHttp(res,'ERROR_GET_ITEM');
    }
    await disconnect();
};

const postBooking = async(req:Request, res:Response, next:Function): Promise<void> =>{
    try{
        await connect();
        const newBooking = new bookingModel({...req.body});
        console.log(newBooking);
        await bookingModel.create(newBooking); 
        res.json({success: true, data: newBooking});
    } catch (e){
        next(e);
        handleHttp(res, 'ERROR_POST_ITEM');
    }
    await disconnect();
};

const deleteBooking = async(req:Request, res:Response, next:Function): Promise<void> =>{
    try{
        const idBooking = req.params.bookingid;
        await connect();
        await bookingModel.findOneAndDelete({id:idBooking});
        res.json({success: true, data: idBooking});
    } catch (e){
        next(e);
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
    await disconnect();
};

export { getBooking,getBookings,postBooking,updateBooking,deleteBooking }
