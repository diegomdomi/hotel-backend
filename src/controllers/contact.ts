import { handleHttp } from "../utils/error.handle";
import { Request, Response, NextFunction } from 'express';
import { dbQuery } from "../database/queryConnect";
import { IReviews } from "../interfaces/contact";


const getReview = async (req:Request, res:Response,next: NextFunction): Promise<void> =>{
    try{
        const review: IReviews | unknown = await dbQuery('SELECT * FROM reviews WHERE id = ?;', req.params.id);
        res.json(review);
    } catch (e){
        next(e)
        handleHttp(res, 'ERROR_GET_ITEM')
    }
};




const getReviews = async (req:Request, res:Response, next:NextFunction): Promise<void> =>{
    try{
        const reviews: IReviews | unknown = await dbQuery('SELECT * FROM reviews', null)
       res.json(reviews)
    } catch (e){
        next(e)
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
};


// const postReview = async(req:Request, res:Response, next:Function): Promise<void> =>{
//     try{
//         await dbQuery('INSERT INTO reviews SET ?;',req.body)
//         res.json({success: true, message: 'data send successfuly'});
//     } catch (e){
//         next(e)
//         handleHttp(res, 'ERROR_POST_ITEM')
//     }
// };
const postReview= async(req:Request, res:Response, next:Function): Promise<void> =>{
    const newReview: IReviews[] | {} = {
        id: req.params.id,
        date: req.body.date,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        subject: req.body.subject,
        comment: req.body.comment,
      };
    try{
        await dbQuery('INSERT INTO reviews SET ?;',newReview)
        res.json({success: true, message: 'data send successfuly'});
    } catch (e){
        next(e)
        handleHttp(res, 'ERROR_POST_ITEM')
    }
};

const updateReview = async (req:Request, res:Response, next:NextFunction): Promise <void> => {
    try{
       await dbQuery('UPDATE reviews SET ? WHERE id = ?',[req.body, req.params.id]);
       res.json({success: true, message: 'user update'});
    } catch (e){
        next(e)
        handleHttp(res, 'ERROR_GET_ITEM')
    }
};


const deleteReview = async (req:Request, res:Response, next:NextFunction): Promise <void> => {
    try{
       await dbQuery('DELETE FROM reviews WHERE id = ?', Number(req.params.id));
       res.json({success: true, message: 'successfuly deleating user'});
    } catch (e){
        next(e)
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
};

export { getReview,getReviews,postReview,updateReview,deleteReview }