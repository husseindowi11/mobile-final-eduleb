import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from '../apis/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  user:any=[];
  login_response:any=[];

  constructor(public formBuilder: FormBuilder, private service: AuthenticationService, private router: Router) { 

  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  submitForm() {
    console.log(this.ionicForm.value)
    this.service.login(this.ionicForm.value).subscribe( async (response) => {
      this.user = response['data'];
      this.login_response = response;
      console.log(response);

      if(this.login_response['is_authenticated'] === 'true'){
        this.router.navigate(['/tabs'])
      }

    });


    
  }

}
