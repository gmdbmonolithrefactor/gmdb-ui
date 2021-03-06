import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import {
  SearchComponent, SearchFormComponent, LoginComponent, LoginFormComponent,
  MoviePageComponent, MovieListComponent, MovieDetailComponent,
  CommentDetailComponent, CommentFormComponent, CommentListComponent,
  BreadcrumbsComponent, LandingPageComponent, NavigationComponent
} from './components';

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
    MoviePageComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
