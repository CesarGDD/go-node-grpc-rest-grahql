import {
  User,
  GetUserRequest,
  CreateUserRequest,
} from './userspb/users';
import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller()
export class UsersController {
  constructor(private usersSvc: UsersService) {}
  @Get('users')
  async getUsers(req): Promise<User[]> {
    return await this.usersSvc.getUsers(req);
  }
  @Get('user/:id')
  async getUser(@Param('id')id: number): Promise<User> {
    console.log('get user rest-node');
    return await this.usersSvc.getUser(id);
  }

  @Post('user')
  async createUser(
    @Body() {password, username}: CreateUserRequest
  ): Promise<User> {
    return await this.usersSvc.createUser({ password, username });
  }

  @Delete('user/:id')
  async deleteUser(
    @Param('id') id: number,
  ): Promise<User> {
    return await this.usersSvc.deleteUser(id);
  }
}
