import { handleHttp } from "../utils/error.handle";
import { Request, Response, NextFunction } from 'express';
import { Room } from "../interfaces/roomDb"; 
import { dbQuery } from "../database/queryConnect";

const getRoom = async (req:Request, res:Response, next:NextFunction): Promise<void> => {
    try{
        const room: Room | unknown = await dbQuery('SELECT * FROM room WHERE id = ?;', req.params.roomid);
        res.json(room);
    } catch (e){
        next(e);
        handleHttp(res, 'ERROR_GET_ITEM')
    }
};

const getRooms =async (req:Request, res:Response, next:NextFunction): Promise<void> => {
    try{
        const room: Room | unknown = await dbQuery('SELECT * FROM room', null)
        res.json(room)
    } catch (e){
        next(e)
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
};

const updateRoom =  async (req:Request, res:Response, next:Function): Promise<void> =>{
    try{
        await dbQuery('UPDATE room SET ? WHERE id = ?', req.params.roomid)
        res.json({success:true,message:'Updated succes'})
    } catch (e){
        next(e)
        handleHttp(res, 'ERROR_GET_ITEM')
    }
};

const postRoom = async(req:Request, res:Response, next:Function): Promise<void> =>{
    try{
        await dbQuery('INSERT INTO room SET ?;',req.body)
        res.json({success: true, message: 'data send successfuly'});
    } catch (e){
        next(e)
        handleHttp(res, 'ERROR_POST_ITEM')
    }
};

const deleteRoom = async(req:Request, res:Response, next:Function): Promise<void> =>{
    try{
        await dbQuery('DELETE room SET ? WHERE id = ?', req.params.roomid)
        res.json({success: true, message: 'room deleted successfuly'});
    } catch (e){
        next(e)
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
};

export { getRoom,getRooms,postRoom,updateRoom,deleteRoom }