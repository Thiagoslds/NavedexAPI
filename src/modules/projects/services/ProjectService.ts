import ProjectRepository from '../infra/typeorm/repositories/ProjectsRepository'
import Project from '../infra/typeorm/models/Projects'
import { DeleteResult } from 'typeorm';
import usersRouter from '../../users/infra/http/routes/users.routes';

const projectsRepository = new ProjectRepository();

interface Request{
    name: string,
    navers: Array<number>
}

interface RequestShow{
    id: string,
    name: string,
    navers: Array<number>
}

interface RequestIndex{
    id: string,
    name: string
}

interface RequestID{
    id: string
}

export default class ProjectService{

    public async execute({name, navers}: Request): Promise<Project>{

        const project = projectsRepository.createProject({name, navers})

        return project;
    }

    public async executeIndex(): Promise<RequestIndex[]>{
        const projects = await projectsRepository.allProjects();
        let indexProject = [];
        projects.forEach(project => 
            indexProject.push({
                id: project.id.toString(),
                name: project.name
            })
        )

        return indexProject;
    }

    public async executeUpdate({id}, {name, navers}: Request): Promise<Request>{
        const project = projectsRepository.updateProject({id}, {name, navers})
        return {name, navers};
    }
    public async executeDelete({id}: RequestID): Promise<{}>{

        const project = projectsRepository.deleteProject({id})
        return project;
    }
    public async executeFindByName({name}): Promise<RequestIndex[]>{
        const projects = await projectsRepository.findProjectByName(name);
        let indexProject = [];
        projects.forEach(project => 
            indexProject.push({
                id: project.id.toString(),
                name: project.name
            })
        )

        return indexProject;
    }
}