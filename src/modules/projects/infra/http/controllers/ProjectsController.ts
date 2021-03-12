import {Request, Response} from 'express'
import ProjectService from '../../../services/ProjectService'
import ProjectShowService from '../../../services/ProjectShowService'

const projectService = new ProjectService()
const projectShowService = new ProjectShowService()

export default class ProjectsController{
    public async create(request: Request, response: Response): Promise<Response>{
        const {name, navers} = request.body;
        const project = await projectService.execute({name, navers})
        return response.json(project);
    }
    public async show(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;
        const project = await projectShowService.executeShow({id})
        return response.json(project);
    }
    public async index(request: Request, response: Response): Promise<Response>{
        const project = await projectService.executeIndex()
        return response.json(project);
    }
    public async update(request: Request, response: Response): Promise<Response>{
        const {name, navers} = request.body;
        const {id} = request.params;
        const project = await projectService.executeUpdate({id}, {name, navers})
        return response.json(project);
    }
    public async delete(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;
        const project = await projectService.executeDelete({id})
        return response.json(project);
    }
    public async findByName(request: Request, response: Response): Promise<Response>{
        const {name} = request.query;
        const project = await projectService.executeFindByName({name: name})
        return response.json(project);
    }
}