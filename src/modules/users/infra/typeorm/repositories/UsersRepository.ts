import {EntityRepository, Repository, getRepository, Not} from 'typeorm';
import User from '../models/Users'

interface Request{
    email: string,
    password: string
}

//Decorator, criando uma classe mapeando o DB.
@EntityRepository(User)

export default class UsersRepository extends Repository<User>{
    
    
    public async createUser({email, password}: Request): Promise<User>{
        const getUserRepository = getRepository(User);

        const user = getUserRepository.create({
            email, password
        })
        await getUserRepository.save(user);

        return user;
    }
    public async findUser(email: string): Promise<User>{
        const getUserRepository = getRepository(User);

        const user = getUserRepository.findOne({email})

        return user;
    }
}