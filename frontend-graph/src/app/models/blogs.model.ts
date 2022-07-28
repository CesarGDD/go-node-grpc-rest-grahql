import { IUser } from "./users.model"

export interface IBlog {
    id: number,
    content: string,
    user_id: number,
    user?: IUser
}

export interface ICreateBlog{
    content: string,
    userId: number
}

export interface IGetBlogs{
    getBlogs: IBlog[]
}

export interface InputBlog {
    input: ICreateBlog
}

export interface CreateBlogMutation {
    createBlog: IBlog
}