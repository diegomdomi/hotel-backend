import mongoose from "mongoose";
import { handleHttp } from "../utils/error.handle";
import { Request, Response, NextFunction } from 'express';
import { Room } from "../interfaces/roomDb"; 
import { roomModel } from "../models/roomModel";

const connect = require('../database/connectionMongo');
const disconnect = mongoose.disconnect;

const getRoom = async (req:Request, res:Response, next:NextFunction): Promise<void> => {
    try{
        const idRoom = req.params.roomid;
        await connect();
        const room: Room | unknown = await roomModel.find({id: idRoom});
        res.json({success: true, data:room});
    } catch (e){
        next(e);
        handleHttp(res, 'ERROR_GET_ITEM');
    }
    await disconnect();
};

const getRooms =async (req:Request, res:Response, next:NextFunction): Promise<void> => {
    try{
        await connect();
        const room: Room | unknown = await roomModel.find();
        res.json({success: true, data: room});
    } catch (e){
        next(e);
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
    await disconnect();
};

const updateRoom =  async (req:Request, res:Response, next:Function): Promise<void> =>{
    try{
        const idRoom = req.params.roomid;
        await connect();    
        await roomModel.findOneAndUpdate({id:idRoom},req.body,{new:true});
        res.json({ success: true, data: idRoom});
    } catch (e){
        next(e);
        handleHttp(res,'ERROR_GET_ITEM');
    }
    await disconnect();
};

const postRoom = async(req:Request, res:Response, next:Function): Promise<void> =>{
    try{
        await connect();
        const newRoom = new roomModel({...req.body});
        await roomModel.create(newRoom); 
        res.json({success: true, data: newRoom});
    } catch (e){
        next(e);
        handleHttp(res, 'ERROR_GET_ITEM');
    }
    await disconnect();
};

const deleteRoom = async(req:Request, res:Response, next:Function): Promise<void> =>{
    try{
        const idRoom = req.params.roomid;
        await connect();
        await roomModel.findOneAndDelete({id:idRoom});
        res.json({success: true, data: idRoom});
    } catch (e){
        next(e);
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
    await disconnect();
};

export { getRoom,getRooms,postRoom,updateRoom,deleteRoom }