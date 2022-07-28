import { CreateBlogRequest, CreateBlogResponse, DeleteBlogRequest, DeleteBlogResponse, GetBlogRequest, GetBlogResponse, GetBlogByUserIdResponse, GetBlogsResponse } from './../blogpb/blogpb';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './blog.entity'

import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog) private readonly blogRepository: Repository<Blog>
    ){}

    async createBlog({content, userId}:CreateBlogRequest):Promise<CreateBlogResponse> {
        const blog = new Blog();
        const res = await this.blogRepository.save({content, userId})
        blog.id = res.id
        blog.content = res.content
        blog.userId = res.userId
        return {blog}
    }

    async deleteBlog({id}:DeleteBlogRequest):Promise<DeleteBlogResponse> {
        await this.blogRepository.delete(id)
        const blog = new Blog()
        blog.id = 0
        blog.content = ""
        blog.userId = 0
        return {blog}
    }

    async getBlog({id}):Promise<GetBlogResponse> {
        const blog =  new Blog()
        const res = await this.blogRepository.findOne({where:{id}})
        blog.id = res.id
        blog.userId = res.userId
        blog.content = res.content
        return {blog}
    }

    async getBlogsByUserId({userId}):Promise<GetBlogByUserIdResponse> {
        let blogs = new Array<Blog>()
        const res = await this.blogRepository.find({where:{userId}})
        blogs = [...res]
        return {blog: blogs}
    }

    async getBlogs():Promise<GetBlogsResponse>{
        let blogs = new Array<Blog>()
        const res = await this.blogRepository.find()
        blogs = [...res]
        return {blog: blogs}
    }
}
