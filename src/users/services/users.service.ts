import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/users.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserDTO } from '../dto/user.dto';
import { UserUpdateDTO } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ){}

  public async createUser(body: UserDTO): Promise<UserEntity> {
    try {
      return await this.userRepository.save(body)
    } catch (error) {
      throw new Error(error)
    }
  }

  public async findUsers(): Promise<UserEntity[]> {
    try {
      return await this.userRepository.find()
    } catch (error) {
      throw new Error(error)
    }
  }

  public async findUserById(id: string): Promise<UserEntity> {
    try {
      return await this.userRepository.createQueryBuilder('user').where({id}).getOne();
    } catch (error) {
      throw new Error(error)
    }
  }

  public async updateUser(body:UserUpdateDTO,id:string): Promise<UpdateResult | undefined> {
    try {
      const user: UpdateResult= await this.userRepository.update(id, body);
      if (user.affected === 0) {
        return undefined
      }
      return user;
    } catch (error) {
      throw new Error(error)
    }
  }

  public async deleteUser(id:string): Promise<DeleteResult | undefined> {
    try {
      const user: DeleteResult= await this.userRepository.delete(id);
      if (user.affected === 0) {
        return undefined
      }
      return user;
    } catch (error) {
      throw new Error(error)
    }
  }

}
