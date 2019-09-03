import { Body, Controller, Get, Post } from '@nestjs/common';

import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  list(): Promise<User[]> {
    return this.userService.list();
  }

  @Post()
  create(@Body('name') name: string): Promise<User> {
    return this.userService.create(name);
  }
}
