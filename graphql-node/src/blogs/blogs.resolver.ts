import { forwardRef, Inject } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import {
  CreateBlogRequest,
} from './blogpb/blogpb';
import { User } from 'src/users/userspb/users';
import { BlogsService } from './blogs.service';
import { UsersService } from 'src/users/users.service';
import { Blog } from 'src/graph/graphql';

@Resolver('Blog')
export class BlogResolver {
  constructor(
    private blogSvc: BlogsService,
    @Inject(forwardRef(() => UsersService))
    private usersSvc: UsersService,
  ) {}

  @Query('getBlogs')
  async getBlogs(req): Promise<Blog[]> {
    console.log('Get Blogs grap-node');
    return await this.blogSvc.getBlogs(req);
  }
  @Query('getBlog')
  async getBlog(@Args('id') id: number): Promise<Blog> {
    console.log('Get Blog grap-node');
    return await this.blogSvc.getBlog({ id });
  }
  @Query('getBlogByUserId')
  async getBlogByUserId(@Args('userId') userId: number): Promise<Blog[]> {
    console.log('Get BlogUserId grap-node');
    return await this.blogSvc.getBlogByUserId({ userId });
  }
  @Mutation('createBlog')
  async createBlog(
    @Args('input') { content, userId }: CreateBlogRequest,
  ): Promise<Blog> {
    console.log('Get CreateBlog grap-node');
    return await this.blogSvc.createBlog({ content, userId });
  }
  @Mutation('deleteBlog')
  async deleteBlog(@Args('input') id: number): Promise<Blog> {
    console.log('Get CreateBlog grap-node');
    return await this.blogSvc.deleteBlog({ id });
  }

  @ResolveField()
  async user(@Parent() { id }: Blog): Promise<User> {
    return this.usersSvc.getUser({ id });
  }
}
