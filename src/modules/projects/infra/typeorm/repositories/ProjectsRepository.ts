import {EntityRepository, Repository, getRepository, DeleteResult, Like} from 'typeorm';
import Project from '../models/Projects'

interface Request{
    name: string,
    navers: Array<number>
}

interface RequestShow{
    id: string
}

@EntityRepository(Project)

export default class ProjectsRepository extends Repository<Project>{
    
    public async createProject({name, navers}: Request): Promise<Project>{
        const getProjectRepository = getRepository(Project);
        const project = getProjectRepository.create({
            name, navers
        });

        await getProjectRepository.save(project);

        return project;
    }
    public async showProject({id}: RequestShow): Promise<Project>{
        const getProjectRepository = getRepository(Project);
        const project = await getProjectRepository.findOne({
            where: {id}
        });

        return project;
    }
    public async allProjects(): Promise<Project[]>{
        const getProjectRepository = getRepository(Project);
        const project = await getProjectRepository.find();

        return project;
    }
    public async updateProject({id}, {name, navers}: Request): Promise<Request>{
        const getProjectRepository = getRepository(Project);
        await getProjectRepository.update({id}, {
            name, navers
        });
        return {name, navers};
    }
    public async deleteProject({id}: RequestShow): Promise<{}>{
        const getProjectRepository = getRepository(Project);
        const project = await getProjectRepository.delete(id);

        return {"Projetos deletados": project.affected};
    }
    public async findProjectByName(name: string): Promise<Project[]>{
        const getProjectRepository = getRepository(Project);
        const project = await getProjectRepository.find({
            name: Like(`%${name}%`)
        });

        return project;
    }
}