import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, 
    UpdateDateColumn, ManyToMany, JoinTable, OneToMany} from 'typeorm'
import Naver from '../../../../navers/infra/typeorm/models/Navers';
import ProjectToNaver from './ProjectToNaver';

@Entity('projects') 
class Project {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column()
    name: string;

    @Column("int", { array: true })
    navers: number[];

    @OneToMany(type => ProjectToNaver, projectToNaver => projectToNaver.project)
    public projectToNavers: ProjectToNaver[];
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Project;