import NaverRepository from '../infra/typeorm/repositories/NaversRepository'
import Naver from '../infra/typeorm/models/Navers'
import ProjectService from '../../projects/services/ProjectService';

const naversRepository = new NaverRepository();
const projectService = new ProjectService()

interface Request{
    name: string,
    birthdate: string,
    admission_date: string,
    job_role: string,
    projects: Array<number>
}

interface RequestID{
    id: string
}

interface RequestIndex{
    id: string,
    name: string,
    birthdate: Date,
    admission_date: Date,
    job_role: string
}

interface RequestShow{
    id: string,
    name: string,
    birthdate: string,
    admission_date: string,
    job_role: string,
    projects: Array<number>
}

export default class NaverService{

    public async execute({name, birthdate, admission_date, job_role, projects}: Request): Promise<Naver>{
        let arrBirthdate = birthdate.split('-');
        const birthdateInDate = new Date(
            Number(arrBirthdate[0]), Number(arrBirthdate[1])-1, Number(arrBirthdate[2])
        ); 
        let arrAdmission_date = admission_date.split('-');
        const admission_dateInDate = new Date(
            Number(arrAdmission_date[0]), Number(arrAdmission_date[1])-1, Number(arrAdmission_date[2])
        ); 
        const naver = naversRepository.createNaver({
            name, birthdateInDate, admission_dateInDate, job_role, projects
        });

        return naver;
    }
    public async executeShow({id}: RequestID): Promise<RequestShow>{
        const naver = await naversRepository.showNaver({id});
        const allProjects = await projectService.executeIndex();
        let projectNaver = [];

        allProjects.forEach(project => {
            naver.projects.forEach(id => {
                if (id.toString() == project.id)
                    projectNaver.push ({id: project.id, name: project.name})
            })
        })
        let arrBirthdate = [];
        arrBirthdate.push(
            naver.birthdate.getFullYear(), 
            naver.birthdate.getMonth()+1, 
            naver.birthdate.getDate()
        );
        let arrAdmissionDate = []
        arrAdmissionDate.push(
            naver.admission_date.getFullYear(),
            naver.admission_date.getMonth()+1, 
            naver.admission_date.getDate()
        );
        const showNaver = {
            id: naver.id.toString(),
            name: naver.name,
            birthdate: arrBirthdate.join('-'),
            admission_date: arrAdmissionDate.join('-'),
            job_role: naver.job_role,
            projects: projectNaver //project.index
        };

        return showNaver;
    }
    public async executeIndex(): Promise<RequestIndex[]>{
        const naver = await naversRepository.allNavers();
        let indexNaver = [];

        naver.forEach(naver => {
            let arrBirthdate = [];
            let arrAdmissionDate = [];
            arrBirthdate.push(
                naver.birthdate.getFullYear(), 
                naver.birthdate.getMonth()+1, 
                naver.birthdate.getDate()
            );
            arrAdmissionDate.push(
            naver.admission_date.getFullYear(),
            naver.admission_date.getMonth()+1, 
            naver.admission_date.getDate()
            );
            indexNaver.push({
                id: naver.id.toString(),
                name: naver.name,
                birthdate: arrBirthdate.join('-'),
                admission_date: arrAdmissionDate.join('-'),
                job_role: naver.job_role
            })
        }
        )

        return indexNaver;
    }
    public async executeUpdate({id}, {name, birthdate, admission_date, job_role, projects}: Request): Promise<Request>{

        let arrBirthdate = birthdate.split('-');
        const birthdateInDate = new Date(
            Number(arrBirthdate[0]), Number(arrBirthdate[1])-1, Number(arrBirthdate[2])
        ); 
        let arrAdmission_date = admission_date.split('-');
        const admission_dateInDate = new Date(
            Number(arrAdmission_date[0]), 
            Number(arrAdmission_date[1])-1,
            Number(arrAdmission_date[2])
        ); 
        const naver = naversRepository.updateNaver({id}, {
            name, birthdateInDate, admission_dateInDate, job_role, projects
        });

        return {
            name, birthdate, admission_date, job_role, projects
        };
    }
    public async executeDelete({id}: RequestID): Promise<{}>{
        const naver = naversRepository.deleteNaver({id});

        return naver;
    }
    public async executeShowName({name}): Promise<RequestIndex[]>{
        const naver = await naversRepository.findNaverName(name);
        let indexNaver = [];

        naver.forEach(naver => {
            let arrBirthdate = [];
            let arrAdmissionDate = [];
            arrBirthdate.push(
                naver.birthdate.getFullYear(), 
                naver.birthdate.getMonth()+1, 
                naver.birthdate.getDate()
            );
            arrAdmissionDate.push(
            naver.admission_date.getFullYear(),
            naver.admission_date.getMonth()+1, 
            naver.admission_date.getDate()
            );
            indexNaver.push({
                id: naver.id.toString(),
                name: naver.name,
                birthdate: arrBirthdate.join('-'),
                admission_date: arrAdmissionDate.join('-'),
                job_role: naver.job_role
            })
        }
        )

        return indexNaver;
    }
    public async executeShowJob({job_role}): Promise<RequestIndex[]>{
        const naver = await naversRepository.findNaverJob(job_role);
        let indexNaver = [];

        naver.forEach(naver => {
            let arrBirthdate = [];
            let arrAdmissionDate = [];
            arrBirthdate.push(
                naver.birthdate.getFullYear(), 
                naver.birthdate.getMonth()+1, 
                naver.birthdate.getDate()
            );
            arrAdmissionDate.push(
            naver.admission_date.getFullYear(),
            naver.admission_date.getMonth()+1, 
            naver.admission_date.getDate()
            );
            indexNaver.push({
                id: naver.id.toString(),
                name: naver.name,
                birthdate: arrBirthdate.join('-'),
                admission_date: arrAdmissionDate.join('-'),
                job_role: naver.job_role
            })
        }
        )

        return indexNaver;
    }
    public async executeShowDate({admission_date}): Promise<RequestIndex[]>{
        let arrAdmissionDate = admission_date.split('-');
        const admissionDate = new Date(
            Number(arrAdmissionDate[0]),
            Number(arrAdmissionDate[1])-1, 
            Number(arrAdmissionDate[2])
        )
        const naver = await naversRepository.findNaverDate(admissionDate);
        let indexNaver = [];
        
        naver.forEach(naver => {
            let arrBirthdate = [];
            let arrAdmissionDate = [];
            arrBirthdate.push(
                naver.birthdate.getFullYear(), 
                naver.birthdate.getMonth()+1, 
                naver.birthdate.getDate()
            );
            arrAdmissionDate.push(
            naver.admission_date.getFullYear(),
            naver.admission_date.getMonth()+1, 
            naver.admission_date.getDate()
            );
            indexNaver.push({
                id: naver.id.toString(),
                name: naver.name,
                birthdate: arrBirthdate.join('-'),
                admission_date: arrAdmissionDate.join('-'),
                job_role: naver.job_role
            })
        }
        )

        return indexNaver;
    }
}