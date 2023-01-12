import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "src/config/base.entity";
import { ACCES_LEVEL } from "src/constants/roles";
import { UserEntity } from "./users.entity";
import { ProjectEntity } from "src/projects/entities/projects.entity";

@Entity({name: 'users_projects'})
export class UserProjectsEntity extends BaseEntity {
    @Column({type: 'enum', enum: ACCES_LEVEL})
    accesLevel: ACCES_LEVEL;

    @ManyToOne()
    user: UserEntity;
    @ManyToOne()
    project: ProjectEntity
}