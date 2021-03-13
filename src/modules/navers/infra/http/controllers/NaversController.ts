import {Request, Response} from 'express'
import CreateNaverService from '../../../services/NaverService'

const createNaver = new CreateNaverService()

export default class NaversController{
    public async create(request: Request, response: Response): Promise<Response>{
        const {name, birthdate, admission_date, job_role, projects} = request.body;
        const naver = await createNaver.execute({
            name, birthdate, admission_date, job_role, projects
        });

        return response.json(naver);
    }
    public async show(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;
        const naver = await createNaver.executeShow({id});

        return response.json(naver);
    }
    public async index(request: Request, response: Response): Promise<Response>{
        const naver = await createNaver.executeIndex();

        return response.json(naver);
    }
    public async update(request: Request, response: Response): Promise<Response>{
        const {name, birthdate, admission_date, job_role, projects} = request.body;
        const {id} = request.params;
        const naver = await createNaver.executeUpdate({id}, {
            name, birthdate, admission_date, job_role, projects
        });

        return response.json(naver);
    }
    public async delete(request: Request, response: Response){
        const {id} = request.params;
        const naver = await createNaver.executeDelete({id});

        return response.json(naver);
    }
    public async showName(request: Request, response: Response): Promise<Response>{
        const {name} = request.query;
        const naver = await createNaver.executeShowName({name: name});
        
        return response.json(naver);
    }
    public async showJob(request: Request, response: Response): Promise<Response>{
        const {job} = request.query;
        const naver = await createNaver.executeShowJob({job_role: job});

        return response.json(naver);
    }
    public async showDate(request: Request, response: Response): Promise<Response>{
        const {date} = request.query;
        const naver = await createNaver.executeShowDate({admission_date: date});
        
        return response.json(naver);
    }
}