import { IBlog } from "./blogs.model"

export interface IUser {
    id: number,
    username: string
    blogs?: IBlog[]
}

export interface ICreateUser {
    username: string
    password: string
}