
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface NewUser {
    username: string;
    password: string;
}

export interface NewBlog {
    userId: number;
    content: string;
}

export interface Blog {
    id: number;
    userId: number;
    content: string;
    user?: Nullable<User>;
}

export interface User {
    id: number;
    username: string;
    password: string;
    blogs?: Nullable<Nullable<Blog>[]>;
}

export interface IQuery {
    getUser(id: number): User | Promise<User>;
    getUsers(): User[] | Promise<User[]>;
    getBlog(id: number): Blog | Promise<Blog>;
    getBlogByUserId(userId: number): Blog[] | Promise<Blog[]>;
    getBlogs(): Blog[] | Promise<Blog[]>;
}

export interface IMutation {
    createUser(input: NewUser): User | Promise<User>;
    deleteUser(id: number): User | Promise<User>;
    createBlog(input: NewBlog): Blog | Promise<Blog>;
    deleteBlog(id: number): Blog | Promise<Blog>;
}

type Nullable<T> = T | null;
