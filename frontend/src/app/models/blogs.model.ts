import { IUser } from "./users.model"

export interface IBlog {
    id: number,
    content: string,
    user_id: number,
    user?: IUser
}

export interface ICreateBlog{
    content: string,
    user_id: number
}