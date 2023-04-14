import mongoose from "mongoose";
import { handleHttp } from "../utils/error.handle";
import { Request, Response, NextFunction } from 'express';
import { User } from "../interfaces/userDb";
import { userModel } from "../models/userModel";

const connect = require('../database/connectionMongo');
const disconnect = mongoose.disconnect;

const getUser = async (req:Request, res:Response,next: NextFunction): Promise<void> =>{
    try{
        const idUser = req.params.userid;
        await connect();
        const user: User | unknown = await userModel.findOne({ id: idUser });
        res.json({success: true, data: user});
    } catch (e){
        next(e);
        handleHttp(res,'ERROR_GET_ITEM');
    }
    await disconnect();
};

const getUsers = async (req:Request, res:Response, next:NextFunction): Promise<void> =>{
    try{
        await connect();
        const users: User | unknown = await userModel.find();
        res.json({success: true, data: users});
    } catch (e){
        next(e);
        handleHttp(res,'ERROR_GET_ITEMS');
    }
    await disconnect();
};


const updateUser = async (req:Request, res:Response, next:Function): Promise<void> =>{
    try{
        const idUser = req.params.userid;
        await connect();    
        await userModel.findOneAndUpdate({id:idUser},req.body,{new:true});
        res.json({ success: true, data: idUser});
    } catch (e){
        next(e);
        handleHttp(res,'ERROR_GET_ITEM');
    }
    await disconnect();
};

const postUser = async(req:Request, res:Response, next:Function): Promise<void> =>{
    try{
        await connect();    
        const idUser = await userModel.find();
        idUser.sort((a: any, b: any) => b.id - a.id);
        req.body.id = idUser[0].id + 1;
        await userModel.create(req.body);
        res.json({ success: true, data: req.body});
    } catch (e){
        next(e);
        handleHttp(res, 'ERROR_POST_ITEM');
    }
    await disconnect();
};


const deleteUser = async(req:Request, res:Response, next:Function): Promise<void> =>{
    try{
        const idUser = req.params.userid;
        await connect();
        await userModel.findOneAndDelete({id:idUser});
        res.json({success: true, data: idUser});
    } catch (e){
        next(e);
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
    await disconnect();
};

export { getUser,getUsers,postUser,updateUser,deleteUser }