// import { handleHttp } from "../utils/error.handle";
// import { Request, Response, NextFunction } from 'express';
// import { User } from "../interfaces/userDb";
// import { dbQuery } from "../database/queryConnect";
// import bcrypt from "bcrypt";

// const getUser = async (req:Request, res:Response, next:NextFunction): Promise <void> => {
//     try{
//         const user: User | unknown = await dbQuery('SELECT * NULL AS pass FROM users WHERE idUser = ?;', req.params.userid);
//         res.json(user)
//     } catch (e){
//         next(e)
//         handleHttp(res, 'ERROR_GET_ITEM')
//     }
// };

// const getUsers = async (req:Request, res:Response, next:NextFunction): Promise <void> => {
//     try{
//        const users: User | unknown = await dbQuery('SELECT *, NULL AS pass FROM users;',null)
//        res.json(users);
//     } catch (e){
//         next(e)
//         handleHttp(res, 'ERROR_GET_ITEMS')
//     }
// };

// const updateUser = async (req:Request, res:Response, next:NextFunction): Promise <void> => {
//     try{
//        req.body.pass = bcrypt.hashSync(req.body.pass,4);
//        await dbQuery('UPDATE users SET ? WHERE idUser = ?',[req.body, req.params.userid]);
//        res.json({success: true, message: 'user update'});
//     } catch (e){
//         next(e)
//         handleHttp(res, 'ERROR_GET_ITEM')
//     }
// };

// const postUser = async (req:Request, res:Response, next:NextFunction): Promise <void> => {
//     try{
//        req.body.pass = bcrypt.hash(req.body.pass,4)
//        await dbQuery('INSERT INTO SET ?', req.body)
//        res.json({success: true, message: 'user added'});
//     } catch (e){
//         next(e);
//         handleHttp(res, 'ERROR_POST_ITEM')
//     }
// };

// const deleteUser = async (req:Request, res:Response, next:NextFunction): Promise <void> => {
//     try{
//        await dbQuery('DELETE FROM users WHERE idUser = ?', Number(req.params.userid));
//        res.json({success: true, message: 'successfuly deleating user'});
//     } catch (e){
//         next(e)
//         handleHttp(res, 'ERROR_DELETE_ITEM')
//     }
// };

// export { getUser,getUsers,postUser,updateUser,deleteUser }