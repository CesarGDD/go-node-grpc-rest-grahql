import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './shared/card/card.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'createBlog',
    component: BlogsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
