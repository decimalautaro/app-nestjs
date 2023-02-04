import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserEntity } from '../entities/users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('users')
    UsersService(): Promise<UserEntity[]> {
      return this.usersService.findUsers();
      
    }
}
