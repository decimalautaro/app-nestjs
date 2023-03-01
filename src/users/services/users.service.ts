import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/users.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserDTO } from '../dto/user.dto';
import { UserUpdateDTO } from '../dto/update-user.dto';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ){}

  public async createUser(body: UserDTO): Promise<UserEntity> {
    try {
      const user = await this.userRepository.save(body)
      if(!user){
        throw new ErrorManager({
          type: "BAD_REQUEST",
          message: "No se pudo crear el usuario."
        })
      }
      return user;
    } catch (error) {
      throw new ErrorManager.createSignatureError(error.message)
    }
  }

  public async findUsers(): Promise<UserEntity[]> {
    try {
      const users:UserEntity[]= await this.userRepository.find();
      if(users.length === 0){
        throw new ErrorManager({
          type: "BAD_REQUEST",
          message: "No se encontro resultado."
        })
      }
      return users;
    } catch (error) {
      throw new ErrorManager.createSignatureError(error.message)
    }
  }

  public async findUserById(id: string): Promise<UserEntity> {
    try {
      const user: UserEntity = await this.userRepository.createQueryBuilder('user').where({id}).getOne();
      if (!user){
        throw new ErrorManager({
          type: "BAD_REQUEST",
          message: "No se encontro el usuario."
        })
      }
      return user
    } catch (error) {
      throw new ErrorManager.createSignatureError(error.message)
    }
  }

  public async updateUser(body:UserUpdateDTO,id:string): Promise<UpdateResult | undefined> {
    try {
      const user: UpdateResult= await this.userRepository.update(id, body);
      if (user.affected === 0) {
        throw new ErrorManager({
          type: "BAD_REQUEST",
          message: "No se pudo actualizar."
        })
      }
      return user;
    } catch (error) {
      throw new ErrorManager.createSignatureError(error.message)
     
    }
  }

  public async deleteUser(id:string): Promise<DeleteResult | undefined> {
    try {
      const user: DeleteResult= await this.userRepository.delete(id);
      if (user.affected === 0) {
        throw new ErrorManager({
          type: "BAD_REQUEST",
          message: "No se pudo borrar."
        })
      }
      return user;
    } catch (error) {
      throw new ErrorManager.createSignatureError(error.message)
    }
  }

}
