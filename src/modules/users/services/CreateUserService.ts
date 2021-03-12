import UsersRepository from '../infra/typeorm/repositories/UsersRepository'
import User from '../infra/typeorm/models/Users'

const usersRepository = new UsersRepository();

interface Request{
    email: string,
    password: string
}

export default class CreateUserService{

    public async execute({email, password}: Request): Promise<User>{

        const user = usersRepository.createUser({
            email, password
        })
        delete (await user).password;
        return user;
    }
}