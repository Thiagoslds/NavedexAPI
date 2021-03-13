import {EntityRepository, Repository, getRepository, Like, MoreThan} from 'typeorm';
import Naver from '../models/Navers'

interface Request{
    name: string,
    birthdateInDate: Date,
    admission_dateInDate: Date,
    job_role: string,
    projects: Array<number>
}

interface RequestShow{
    id: string
}

@EntityRepository(Naver)

export default class NaversRepository extends Repository<Naver>{
    
    public async createNaver({name, birthdateInDate, admission_dateInDate, 
        job_role, projects}: Request): Promise<Naver>{
            const getNaverRepository = getRepository(Naver);
            const birthdate = birthdateInDate;
            const admission_date = admission_dateInDate;
            const naver = getNaverRepository.create({
                name, birthdate, admission_date, job_role, projects
            });

            await getNaverRepository.save(naver);
            return naver;
    }
    public async showNaver({id}: RequestShow): Promise<Naver>{
            const getNaverRepository = getRepository(Naver);
            const naver = await getNaverRepository.findOne({
                where: {id}
            });

            return naver;
    }
    public async allNavers(): Promise<Naver[]>{
        const getNaverRepository = getRepository(Naver);
        const naver = await getNaverRepository.find();

        return naver;
    }
    public async updateNaver({id}, {name, birthdateInDate, admission_dateInDate, 
        job_role, projects}: Request): Promise<Request>{
            const getNaverRepository = getRepository(Naver);
            const birthdate = birthdateInDate;
            const admission_date = admission_dateInDate;
            const naver = await getNaverRepository.update(id, {
                name, birthdate, admission_date, job_role, projects
            });

            return {
                name, birthdateInDate, admission_dateInDate, job_role, projects
            };
    }
    public async deleteNaver({id}: RequestShow): Promise<{}>{
        const getNaverRepository = getRepository(Naver);
        const naver = await getNaverRepository.delete(id);

        return {"Navers deletados": naver.affected};
    }
    public async findNaverName(name: string): Promise<Naver[]>{
        const getNaverRepository = getRepository(Naver);
        const naver = await getNaverRepository.find({
            name: Like(`%${name}%`)
        });

        return naver;
    }
    public async findNaverJob(job_role: string): Promise<Naver[]>{
        const getNaverRepository = getRepository(Naver);
        const naver = await getNaverRepository.find({
            job_role: Like(`%${job_role}%`)
        });

        return naver;
    }
    public async findNaverDate(admission_date: Date): Promise<Naver[]>{
        const getNaverRepository = getRepository(Naver);
                const naver = await getNaverRepository.find({
            admission_date: MoreThan(admission_date)
        });
        
        return naver;
    }
}