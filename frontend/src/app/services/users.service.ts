import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICreateUser, IUser } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private URL = ' http://127.0.0.1:3000/'

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<IUser[]>(`${this.URL}users`)
  }
  getUser(id: number) {
    return this.httpClient.get<IUser>(`${this.URL}user/${id}`)
  }

  createUser(body: ICreateUser){
    return this.httpClient.post<IUser>(`${this.URL}user`, body)
  }

  deleteUser(id: number) {
    return this.httpClient.delete<IUser>(`${this.URL}user/${id}`)
  }
}
