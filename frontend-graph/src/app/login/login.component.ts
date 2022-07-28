import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateUserGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private createUser : CreateUserGQL
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.createUser.mutate({
      input: {
        username: form.value.username,
        password: form.value.password
      }
    }).subscribe(({data, loading, errors}) => {
      console.log(data?.createUser)
      form.reset()
    })
  }

}
