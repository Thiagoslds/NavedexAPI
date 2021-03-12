import {Request, Response} from 'express'
import CreateUserService from '../../../services/CreateUserService'

const createUser = new CreateUserService()

export default class UsersController{
    public async create(request: Request, response: Response): Promise<Response>{
        const {email, password} = request.body;
        const user = await createUser.execute({
            email, password
        })
        return response.json(user);
    }
}