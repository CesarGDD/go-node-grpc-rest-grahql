import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog, ICreateBlog } from '../models/blogs.model';
import { IUser } from '../models/users.model';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private URL = ' http://127.0.0.1:3000/'
  blogs: IBlog[] = [];
  user: IUser = {
    id: 0,
    username: '',
  };
  error: string | null = null

  constructor(
    private httpClient: HttpClient,
    private userSvc: UsersService
    ) { }

  getBlog(id: number) {
    return this.httpClient.get<IBlog>(`${this.URL}blog/${id}`)
  }
  getBlogs() {
    return this.httpClient.get<IBlog[]>(`${this.URL}blogs`).subscribe({
      next: (data) => {
        for (let blog of data) {
          this.userSvc.getUser(blog.user_id).subscribe({
            next: (userData) => {
              if (blog.user_id === userData.id) {
                blog.user = userData;
                this.blogs.push(blog);
              }
            },
          });
        }
      },
      error: (error) => {
        this.error = error.message
      },
      complete: () => console.log(this.blogs),
    });
  }
  getBlogByUserId(user_id: number) {
    return  this.httpClient.get<IBlog[]>(`${this.URL}blog/${user_id}`)
  }
  createBlog(body: ICreateBlog) {
    return this.httpClient.post<IBlog>(`${this.URL}blog`, body)
  }
  deleteBlog(id: number) {
    return this.httpClient.delete<IBlog>(`${this.URL}blog/${id}`)
  }
}
