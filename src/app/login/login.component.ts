import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder  } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correctData=false;
  submitted=false;

  signupForm: FormGroup;

  constructor(private authService : AuthService,
              private router: Router) {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
      "username": new FormControl("admin",Validators.required),
      "password": new FormControl("",Validators.required)
    })
   })
   }

  ngOnInit() {
  }

  submit(){
    console.log(this.signupForm);
    if (this.authService.logIn(this.signupForm.value.userData)){
      this.router.navigate(['/profile']);
    }
    this.submitted=true;
  }

}
