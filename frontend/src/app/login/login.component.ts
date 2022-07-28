import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICreateUser } from '../models/users.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(
    private usersService: UsersService
  ) { }

    onSubmit(form: NgForm) {
      this.usersService.createUser(form.value).subscribe({
        next: (data) => {
          console.log(data)
        },
        error: (error) => {
          console.log(error.message)
        },
        complete: () => {
          form.reset()
        }
      })
    }

  ngOnInit(): void {
  }

}
