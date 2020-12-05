import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './auth/services/user.service';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NewPostComponent } from './auth/new-post/new-post.component';
import { EditPostComponent } from './auth/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    NewUserComponent,
    LoginComponent,
    HomeComponent,
    NewPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Title,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
