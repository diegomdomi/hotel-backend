import { Router, Request, Response } from 'express';
const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send({data:'AQUI VA EL DATO'})
})
export { router };