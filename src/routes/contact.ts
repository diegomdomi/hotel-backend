import { Router } from 'express';
import { getReview, getReviews, postReview, updateReview, deleteReview } from '../controllers/contact'

const routerReviews = Router()
routerReviews.get("/", getReviews);
routerReviews.get("/:contact", getReview);
routerReviews.put("/:contact", updateReview);
routerReviews.post("/", postReview);
routerReviews.delete("/:contact", deleteReview);
export { routerReviews }





