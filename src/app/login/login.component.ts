import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 name: string ;
 password: string ;
 constructor(private router: Router) { }

  ngOnInit() {
  }
  Login(){
    console.log(this.name) ;
    console.log(this.password) ;
    if (this.name == 'admin' && this.password == 'admin')
    {
      this.router.navigate(['/employee'])
    }
    else{
      alert("Please enter valid loginid or password")
    }
  }
}
