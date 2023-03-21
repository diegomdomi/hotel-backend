import { handleHttp } from "../utils/error.handle";
import { Request, Response } from 'express'

const getBooking = (req:Request, res:Response)=>{
    try{
       
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEM')
    }
};

const getBookings = (req:Request, res:Response)=>{
    try{
       res.send('hola booking')
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
};

const updateBooking = (req:Request, res:Response)=>{
    try{
       
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEM')
    }
};

const postBooking = ({body}:Request, res:Response)=>{
    try{
       res.send(body)
    } catch (e){
        handleHttp(res, 'ERROR_POST_ITEM')
    }
};

const deleteBooking = (req:Request, res:Response)=>{
    try{
       
    } catch (e){
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
};

export { getBooking,getBookings,postBooking,updateBooking,deleteBooking }