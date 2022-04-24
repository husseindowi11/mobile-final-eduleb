import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from '../apis/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  login:any=[];

  constructor(public formBuilder: FormBuilder, private service: AuthenticationService) { 

  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  submitForm() {
    console.log(this.ionicForm.value)
    this.service.login(this.ionicForm.value).subscribe( response => {
      this.login = response['data'];
      console.log(response);
    });
  }

}
