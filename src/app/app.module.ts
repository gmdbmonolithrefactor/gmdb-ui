import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation';
import { SearchComponent } from './components/search';
import { SearchFormComponent } from './components/search-form';
import { LoginFormComponent } from './components/login-form';
import { LoginComponent } from './components/login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieListComponent } from './components/movie-list';
import { MovieDetailComponent } from './components/movie-detail';
import { CommentFormComponent } from './components/comment-form';
import { CommentListComponent } from './components/comment-list';
import { CommentDetailComponent } from './components/comment-detail';
import {HttpClientModule} from '@angular/common/http';
import { LandingPageComponent } from './components/landing-page';
import { MoviePageComponent } from './components/movie-page';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    SearchFormComponent,
    LoginFormComponent,
    LoginComponent,
    MovieListComponent,
    MovieDetailComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentDetailComponent,
    LandingPageComponent,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
