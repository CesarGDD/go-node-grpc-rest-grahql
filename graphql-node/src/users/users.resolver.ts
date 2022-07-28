import { forwardRef, Inject } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Blog } from 'src/blogs/blogpb/blogpb';
import { BlogsService } from 'src/blogs/blogs.service';
import { User } from 'src/graph/graphql';
import { UsersService } from './users.service';
import {
  CreateUserRequest
} from './userspb/users';

@Resolver('User')
export class UsersResolver {
  constructor(
    private usersSvc: UsersService, 
    @Inject(forwardRef(() => BlogsService))
    private blogsSvc: BlogsService
    ) {}

  @Query()
  async getUsers(req): Promise<User[]> {
    console.log('get users graph-node');
    return await this.usersSvc.getUsers(req);
  }

  @Query()
  async getUser(@Args('id') id: number): Promise<User> {
    console.log('get user graph-node');
    return await this.usersSvc.getUser({ id });
  }

  @Mutation()
  async createUser(
    @Args('input') { username, password }: CreateUserRequest,
  ): Promise<User> {
    console.log('create user graph-node');
    return await this.usersSvc.createUser({ username, password });
  }

  @Mutation()
  async deleteUser(@Args('id') id: number): Promise<User> {
    console.log('create user graph-node');
    return await this.usersSvc.deleteUser({ id });
  }

  @ResolveField()
  async blogs(@Parent() {id}: User):Promise<Blog[]> {
    return await this.blogsSvc.getBlogByUserId({userId: id})
  }
}
