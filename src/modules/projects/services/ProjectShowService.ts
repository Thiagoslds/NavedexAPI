import ProjectRepository from '../infra/typeorm/repositories/ProjectsRepository'
import Project from '../infra/typeorm/models/Projects'
import NaverService from '../../navers/services/NaverService';

const projectsRepository = new ProjectRepository();
const naverService = new NaverService();

interface RequestShow{
    id: string,
    name: string,
    navers: Array<number>
}

interface RequestID{
    id: string
}

export default class ProjectShowService{

    public async executeShow({id}: RequestID): Promise<RequestShow>{
        const project = await projectsRepository.showProject({id})
        const allNavers = await naverService.executeIndex();
        let projectNaver = [];
        allNavers.forEach(naver => {
            project.navers.forEach(id => {
                if (id.toString() == naver.id)
                    projectNaver.push ({
                        id: naver.id.toString(),
                        name: naver.name,
                        birthdate: naver.birthdate,
                        admission_date: naver.admission_date,
                        job_role: naver.job_role
                    })
            })
        })

        const showProject = {
            id: project.id.toString(),
            name: project.name,
            navers: projectNaver
        }
        return showProject;
    }
}