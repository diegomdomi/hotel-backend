import { handleHttp } from "../utils/error.handle";
import { Request, Response } from 'express'

const getRoom = (req:Request, res:Response)=>{
    try{
       
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEM')
    }
};

const getRooms = (req:Request, res:Response)=>{
    try{
        res.send('hola rooms')
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
};

const updateRoom = (req:Request, res:Response)=>{
    try{
       
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEM')
    }
};

const postRoom = (req:Request, res:Response)=>{
    try{
       
    } catch (e){
        handleHttp(res, 'ERROR_POST_ITEM')
    }
};

const deleteRoom = (req:Request, res:Response)=>{
    try{
       
    } catch (e){
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
};

export { getRoom,getRooms,postRoom,updateRoom,deleteRoom }