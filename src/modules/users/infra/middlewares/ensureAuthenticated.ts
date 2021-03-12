import authConfig from '../../../../config/auth'
import { Request, Response, NextFunction } from 'express'
import {verify} from 'jsonwebtoken'

export default function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
): void {
    const authHeader = request.headers.authorization;
    if(!authHeader){
        throw new Error('Token JWT não encontrado.');
    }

    const [_, token] = authHeader.split(' ');
    try{
        const decoded = verify(token, authConfig.jwt.secret);

        return next();
    } catch{ 
        throw new Error('Token JWT Inválido');
    }
}