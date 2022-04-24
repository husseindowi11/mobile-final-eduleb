import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../apis/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  ionicForm: FormGroup;
  is_submitted = false;
  register_response:any=[];

  constructor(public formBuilder: FormBuilder, private service: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      password_confirmation: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm(){
    this.is_submitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    }else{
      console.log(this.ionicForm.value)
      this.service.register(this.ionicForm.value).subscribe(response => {
        this.register_response = response;
        console.log(response);

        // if(this.register_response['status_code'] != 200){
        //   this.invalid_credentials = true;
        // }

        if(this.register_response['status_code'] === 200){
          this.router.navigate(['/login'])
        }

      });
    }
  }

  
 
}