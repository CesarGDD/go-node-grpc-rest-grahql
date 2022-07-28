import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
})
export class BlogsComponent implements OnInit {

  constructor(
    private blogsService: BlogsService,
    private router: Router
  ) { }
  
  onCreateBlog(form: NgForm) {
    console.log(form.value);
    
    this.blogsService.createBlog({content: form.value.content, user_id: 10}).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.log(error.message)
      },
      complete: () => {
        this.router.navigateByUrl('/')
      }
    })
  }

  ngOnInit(): void {
  }

}
