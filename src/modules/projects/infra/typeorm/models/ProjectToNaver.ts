import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, 
    UpdateDateColumn, ManyToMany, JoinTable, ManyToOne} from 'typeorm'
import Naver from '../../../../navers/infra/typeorm/models/Navers';
import Project from './Projects';

@Entity('projecttonaver') 
class ProjectToNaver {
    @PrimaryGeneratedColumn() 
    id: number;

    @ManyToOne(type => Naver, naver => naver.projectToNavers)
    public naver: Naver;

    @ManyToOne(type => Project, project => project.projectToNavers)
    public project: Project;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default ProjectToNaver;