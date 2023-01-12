import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/config/base.entity";
import { ROLES } from "src/constants/roles";
import { IUser } from "src/interfaces/user.interface";
import { UserProjectsEntity } from "./usersProjects.entity";

@Entity({name: 'users'})
export class UserEntity  extends BaseEntity implements IUser{
    @Column()
    firsName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column({unique: true})
    email: string;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;

    @Column({type: 'enum', enum: ROLES})
    role: ROLES;

    @OneToMany(()=> UserProjectsEntity, (usersProject)=> usersProject.user)
    projectsIncludes: UserProjectsEntity[];
}