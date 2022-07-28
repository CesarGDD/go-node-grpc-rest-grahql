import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Blog } from 'src/graph/graphql';
import {
  CreateBlogRequest,
  CreateBlogResponse,
  DeleteBlogRequest,
  DeleteBlogResponse,
  GetBlogByUserIdRequest,
  GetBlogByUserIdResponse,
  GetBlogRequest,
  GetBlogResponse,
  GetBlogsRequest,
  GetBlogsResponse,
} from './blogpb/blogpb';
import { grpcClient } from './blogs.client';

export interface BlogService {
  CreateBlog(request: CreateBlogRequest): Observable<CreateBlogResponse>;
  DeleteBlog(request: DeleteBlogRequest): Observable<DeleteBlogResponse>;
  GetBlog(request: GetBlogRequest): Observable<GetBlogResponse>;
  GetBlogByUserId(
    request: GetBlogByUserIdRequest,
  ): Observable<GetBlogByUserIdResponse>;
  GetBlogs(request: GetBlogsRequest): Observable<GetBlogsResponse>;
}

@Injectable()
export class BlogsService implements OnModuleInit {
  @Client(grpcClient)
  private readonly svc: ClientGrpc;
  private blogSvc: BlogService;

  onModuleInit() {
    this.blogSvc = this.svc.getService<BlogService>('BlogService');
  }

  async getBlogs(req): Promise<Blog[]> {  
    const {blog} = await this.blogSvc.GetBlogs(req).toPromise();
    return blog;
  }
  async getBlog({ id }: GetBlogRequest): Promise<Blog> {
    const {blog} = await this.blogSvc.GetBlog({ id }).toPromise();
    return blog;
  }

  async getBlogByUserId({
    userId,
  }: GetBlogByUserIdRequest): Promise<Blog[]> {
    const {blog} = await this.blogSvc.GetBlogByUserId({ userId }).toPromise();
    return blog;
  }
  async createBlog({
    content,
    userId,
  }: CreateBlogRequest): Promise<Blog> {
    const {blog} = await this.blogSvc.CreateBlog({ content, userId }).toPromise();
    return blog;
  }

  async deleteBlog({ id }: DeleteBlogRequest): Promise<Blog> {
    const {blog} = await this.blogSvc.DeleteBlog({ id }).toPromise();
    return blog;
  }
}