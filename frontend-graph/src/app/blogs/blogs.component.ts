import { InputBlog, CreateBlogMutation, ICreateBlog } from './../models/blogs.model';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CREATE_BLOG } from '../models/graphql.mutations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(
    private apollo: Apollo,
    private router: Router
  ) { }

  onCreateBlog(form: NgForm) {
    this.apollo.mutate<CreateBlogMutation, InputBlog>({
      mutation: CREATE_BLOG,
      variables: {
        input: {
          content: form.value.content,
          userId: 10
        }
      }
    }).subscribe(({data, loading, errors})=> {
      console.log(data?.createBlog.user?.username);
      form.reset()
      if(!loading && !errors) {
        this.router.navigateByUrl('/')
      }
    })
  }

  ngOnInit(): void {
  }

}
