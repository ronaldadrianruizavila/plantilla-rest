import {Request, Response, Router} from "express";
import userController from '../app/Http/Controllers/UserController'
export const WEB = Router();

WEB.get('/', userController.index);

WEB.get('/mensajes',(req: Request,res: Response)=>{

});
