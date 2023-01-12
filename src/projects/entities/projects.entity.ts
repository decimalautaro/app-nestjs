import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/config/base.entity";
import { IProject } from "src/interfaces/project.interface";
import { UserProjectsEntity } from "src/users/entities/usersProjects.entity";

@Entity({name: 'projects'})
export class ProjectEntity  extends BaseEntity implements IProject{
    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(()=> UserProjectsEntity, (usersProject)=> usersProject.project)
    usersIncludes: UserProjectsEntity[]

}