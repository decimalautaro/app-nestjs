import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ACCES_LEVEL } from "../../constants/roles";
import { UserEntity } from "./users.entity";
import { ProjectEntity } from "../../projects/entities/projects.entity";

@Entity({name: 'users_projects'})
export class UserProjectsEntity extends BaseEntity {
    @Column({type: 'enum', enum: ACCES_LEVEL})
    accesLevel: ACCES_LEVEL;

    @ManyToOne(()=> UserEntity, (user)=> user.projectsIncludes)
    user: UserEntity;
    @ManyToOne(()=> ProjectEntity, (project)=>project.usersIncludes)
    project: ProjectEntity
}