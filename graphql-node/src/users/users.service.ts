import { Injectable, OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';
import { grpcClient } from './users.client';
import { Client, ClientGrpc } from '@nestjs/microservices';
import {
  CreateUserRequest,
  CreateUserResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  GetUserRequest,
  GetUserResponse,
  GetUsersRequest,
  GetUsersResponse,
} from './userspb/users';
import { User } from 'src/graph/graphql';

export interface UserService {
  CreateUser(request: CreateUserRequest): Observable<CreateUserResponse>;
  GetUser(request: GetUserRequest): Observable<GetUserResponse>;
  DeleteUser(request: DeleteUserRequest): Observable<DeleteUserResponse>;
  GetUsers(request: GetUsersRequest): Observable<GetUsersResponse>;
}

@Injectable()
export class UsersService implements OnModuleInit {
  @Client(grpcClient)
  private readonly svc: ClientGrpc;
  private usersSvc: UserService;

  onModuleInit() {
    this.usersSvc = this.svc.getService<UserService>('UsersService');
  }

  async getUsers(req): Promise<User[]> {
    const {user} = await this.usersSvc.GetUsers(req).toPromise();
    return user
  }

  async getUser({ id }: GetUserRequest): Promise<User> {
    const {user} = await this.usersSvc.GetUser({ id }).toPromise();
    return user
  }

  async createUser({
    username,
    password,
  }: CreateUserRequest): Promise<User> {
    const {user} = await this.usersSvc.CreateUser({ username, password }).toPromise();
    return user
  }

  async deleteUser({ id }: DeleteUserRequest): Promise<User> {
    const {user} = await this.usersSvc.DeleteUser({ id }).toPromise();
    return user
  }
}
