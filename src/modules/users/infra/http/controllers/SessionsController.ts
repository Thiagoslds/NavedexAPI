import {Request, Response} from 'express';
import SessionService from '../../../services/SessionService';

const sessionService = new SessionService();

export default class SessionsController{
    public async create(request: Request, response: Response): Promise<Response>{
        const { email, password } = request.body;
    
        const { user, token } = await sessionService.execute({
            email, password
        })
    
        return response.json({ user: user, token });
    }
}