import { handleHttp } from "../utils/error.handle";
import { Request, Response } from 'express'

const getUser = (req:Request, res:Response)=>{
    try{
       
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEM')
    }
};

const getUsers = (req:Request, res:Response)=>{
    try{
       
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
};

const updateUser = (req:Request, res:Response)=>{
    try{
       
    } catch (e){
        handleHttp(res, 'ERROR_GET_ITEM')
    }
};

const postUser = (req:Request, res:Response)=>{
    try{
       
    } catch (e){
        handleHttp(res, 'ERROR_POST_ITEM')
    }
};

const deleteUser = (req:Request, res:Response)=>{
    try{
       
    } catch (e){
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
};

export { getUser,getUsers,postUser,updateUser,deleteUser }