import {sign} from 'jsonwebtoken';
import authconfig from '../../../../src/config/auth'
import User from '../infra/typeorm/models/Users'
import UsersRepository from '../infra/typeorm/repositories/UsersRepository';

const usersRepository = new UsersRepository();

interface Request{
    email: string;
    password: string;
}

interface Response{
    user: User;
    token: string;
}

class SessionService{   
    public async execute({email, password}: Request): Promise<Response>{
        console.log(email, password)
        const user = await usersRepository.findUser(email);
        console.log(user.email, user.password)
        if(!user){
            throw new Error('Senha ou email incorretos');
        }

        if(password !== user.password){
            throw new Error('Senha ou email incorretos');
        }

        const {secret, expiresIn} = authconfig.jwt;

        //segundo paramentro é 'NavedexHash' em md5 - chave secreta-
        const token = sign({}, secret, {
            subject: user.id.toString(),
            expiresIn
        });

        delete user.password
        
        return{
            user,
            token
        };
    }
}

export default SessionService;