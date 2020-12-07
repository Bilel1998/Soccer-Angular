import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm : FormGroup;
  constructor( private formBuilder : FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.signUpForm = this. formBuilder.group({
      firstName : ['', [Validators.minLength(3),Validators.required]],
      lastName : ['',Validators.maxLength(12)] ,
      email :['',[Validators.required,Validators.email]],
      password : ['', [Validators.minLength(8),Validators.required]],
      cPassword :['']
    },
    {
      validator: MustMatch('password', 'cPassword')
      })
    
  }
  signUp(obj:any){
    console.log (obj);
    this.userService.addUserService(obj).subscribe(
      ()=>{
        console.log('added successfully');
        this.router.navigate(['']);

        
      }
    );
  }
}