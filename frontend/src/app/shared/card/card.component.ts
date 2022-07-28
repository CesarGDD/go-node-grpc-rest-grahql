import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/models/blogs.model';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  
  constructor( private blogSvc: BlogsService) {}
  blogs:IBlog[] = this.blogSvc.blogs
  error:string | null = this.blogSvc.error

  fetchBlogs() {
    this.blogSvc.getBlogs()
  }

  ngOnInit(): void {
    this.fetchBlogs();
  }
}
