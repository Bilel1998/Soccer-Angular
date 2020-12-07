import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  login:any={};
  loginForm:FormGroup;
  constructor(private x:FormBuilder, private userService: UserService, private router:Router){}



  ngOnInit(): void {
    this.loginForm=this.x.group({
      Email :[''],
      mdp:['']
    })
  }
  loginUser(){
    this.userService.loginUserService(this.login).subscribe(
      data => {
        if (data) {
          localStorage.setItem('connectedUserFname',data.user[0].firstName);
          localStorage.setItem('connectedUserLname',data.user[0].lastName);
          location.reload();
        }
        
      }
    )
    this.router.navigate(['']);
  }
}