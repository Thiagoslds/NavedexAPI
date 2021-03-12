import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, 
    UpdateDateColumn, ManyToOne, JoinColumn, OneToMany} from 'typeorm'
import User from '../../../../../modules/users/infra/typeorm/models/Users'
import ProjectToNaver from '../../../../projects/infra/typeorm/models/ProjectToNaver';

@Entity('navers') 
class Naver {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column()
    name: string;

    @Column()
    birthdate: Date;

    @Column()
    admission_date: Date;

    @Column()
    job_role: string;

    @Column("int", { array: true })
    projects: number[];

    @Column()
    user_id: number;

    @OneToMany(type => ProjectToNaver, projectToNaver => projectToNaver.naver)
    public projectToNavers: ProjectToNaver[];

    @ManyToOne(()=> User) 
    @JoinColumn({ name: 'user_id' })
    user: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Naver;