import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { GET_BLOGS } from 'src/app/models/graphql.queries';
import { IBlog, IGetBlogs } from 'src/app/models/blogs.model';
import { ApolloError } from '@apollo/client/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private apollo: Apollo
  ) { }
  blogs:IBlog[] = []
  error: ApolloError | null | undefined = null
  loading = false

  getBlogs() {
    this.apollo.watchQuery<IGetBlogs>({
      query: GET_BLOGS
    }).valueChanges.subscribe(({data, loading, error}) => {
      this.blogs = data.getBlogs
      this.error = error
      this.loading = loading
    })
  }

  ngOnInit(): void {
    this.getBlogs()
  }

}
