import { GetBlogRequest, GetBlogResponse, GetBlogsRequest, GetBlogsResponse, GetBlogByUserIdRequest, GetBlogByUserIdResponse, CreateBlogRequest, CreateBlogResponse, DeleteBlogRequest, DeleteBlogResponse } from './../blogpb/blogpb';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { BlogService } from './blog.service';

@Controller('blogpb')
export class BlogController {
    constructor(private blogSvc: BlogService){}
    @GrpcMethod('BlogService', 'GetBlog')
    getBlog(req: GetBlogRequest): Promise<GetBlogResponse> {
        console.log('Get Blog gRPC');
        return this.blogSvc.getBlog(req) 
    }
    @GrpcMethod('BlogService', 'GetBlogs')
    getBlogs(req: GetBlogsRequest): Promise<GetBlogsResponse> {
        console.log('Get Blogs gRPC');
        return this.blogSvc.getBlogs()
    }
    @GrpcMethod('BlogService', 'GetBlogByUserId')
    getBlogByUserId(req: GetBlogByUserIdRequest): Promise<GetBlogByUserIdResponse> {
        console.log('Get BlogUserId gRPC');
        return this.blogSvc.getBlogsByUserId(req)
    }
    @GrpcMethod('BlogService', 'CreateBlog')
    createBlog(req: CreateBlogRequest): Promise<CreateBlogResponse> {
        console.log('Create Blog gRPC');
        return this.blogSvc.createBlog(req)
    }
    @GrpcMethod('BlogService', 'DeleteBlog')
    deleteBlog(req: DeleteBlogRequest): Promise<DeleteBlogResponse> {
        console.log('Delete Blog gRPC');
        return this.blogSvc.deleteBlog(req)
    }
}
