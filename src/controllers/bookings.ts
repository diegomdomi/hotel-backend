import { handleHttp } from "../utils/error.handle";
import { Request, Response, NextFunction } from 'express';
import { dbQuery } from "../database/queryConnect";
import { Bookings } from "../interfaces/bookingsDb";

const getBooking = async (req:Request, res:Response,next: NextFunction): Promise<void> =>{
    try{
        const booking: Bookings | unknown = await dbQuery('SELECT * FROM booking WHERE idBooking = ?;', req.params.bookingid);
        res.json(booking);
    } catch (e){
        next(e)
        handleHttp(res, 'ERROR_GET_ITEM')
    }
};

const getBookings = async (req:Request, res:Response, next:NextFunction): Promise<void> =>{
    try{
        const bookings: Bookings | unknown = await dbQuery('SELECT * FROM booking', null)
       res.json(bookings)
    } catch (e){
        next(e)
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
};

const updateBooking = async (req:Request, res:Response, next:Function): Promise<void> =>{
    try{
       await dbQuery('UPDATE booking SET ? WHERE idBooking = ?', req.params.bookingid)
       res.json({success:true,message:'Updated succes'})
    } catch (e){
        next(e)
        handleHttp(res, 'ERROR_GET_ITEM')
    }
};

const postBooking = async(req:Request, res:Response, next:Function): Promise<void> =>{
    try{
        await dbQuery('INSERT INTO booking SET ?;',req.body)
        res.json({success: true, message: 'booking succes'});
    } catch (e){
        next(e)
        handleHttp(res, 'ERROR_POST_ITEM')
    }
};

const deleteBooking =async(req:Request, res:Response, next:Function): Promise<void> =>{
    try{
        await dbQuery('DELETE booking SET ? WHERE idBooking = ?', req.params.bookingid)
    } catch (e){
        next(e)
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
};

export { getBooking,getBookings,postBooking,updateBooking,deleteBooking }