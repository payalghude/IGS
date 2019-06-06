import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import {  RouterModule, Routes } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const robj:Routes= [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
{ path: 'employee', component: EmployeeComponent },
{ path: 'about', component:  AboutComponent },
{ path: 'contact', component: ContactComponent }] ;
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EmployeeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(
      robj,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
