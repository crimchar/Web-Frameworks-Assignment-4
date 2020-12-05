import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { NewPostComponent} from './auth/new-post/new-post.component';
import { EditPostComponent } from './auth/edit-post/edit-post.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'new-user',
    component: NewUserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'new-post',
    component: NewPostComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'edit-post/:postId',
    component: EditPostComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
