import { IProject } from "src/interfaces/project.interface";
import { BaseEntity, Column, Entity } from "typeorm";

@Entity({name: 'projects'})
export class ProjectEntity  extends BaseEntity implements IProject{
    @Column()
    name: string;

    @Column()
    description: string;

}