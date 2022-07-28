import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  CreateBlogResponse,
  GetBlogRequest,
  GetBlogResponse,
  GetBlogsResponse,
  GetBlogByUserIdRequest,
  GetBlogByUserIdResponse,
  DeleteBlogRequest,
  DeleteBlogResponse,
  CreateBlogRequest,
  Blog,
} from './blogpb/blogpb';
import { BlogsService } from './blogs.service';

@Controller()
export class BlogsController {
  constructor(private blogsSvc: BlogsService) {}

  @Get('blogs')
  async getBlogs(req): Promise<Blog[]> {
    return await this.blogsSvc.getBlogs(req);
  }
  @Get('blog/:id')
  async getBlog(@Param('id') id: number): Promise<Blog> {
    return await this.blogsSvc.getBlog(id);
  }
  @Post('blog')
  async createBlog(
    @Body() { content, userId }: CreateBlogRequest,
  ): Promise<Blog> {
    return await this.blogsSvc.createBlog({content, userId});
  }
  @Get('blog/by/:user_id')
  async getBlogsByUserId(
    @Param('user_id') userId: number,
  ): Promise<Blog[]> {
    return await this.blogsSvc.getBlogByUserId({ userId });
  }
  @Delete('blog/:id')
  async deleteBlog(
    @Param('id') id: number,
  ): Promise<Blog> {
    return await this.blogsSvc.deleteBlog(id);
  }
}
