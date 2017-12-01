import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormBuilder, NgModel } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';

import { ISessionCreate } from '../../interfaces/session/session-create.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @Output() submitSigninData = new EventEmitter<ISessionCreate>();
  signinForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.signinForm = this.formBuilder.group({
      loginName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnChanges(changes: SimpleChanges ){
  }

  ngOnInit() {
  }

  onSubmit(): void{
    if(this.signinForm.valid){
      const loginName:string = this.signinForm.value.loginName;
      const password: string = this.signinForm.value.password;
      this.submitSigninData.emit({
        loginName: loginName,
        password: password
      });
    }else{
      alert("Invalid Form");
    }
    
  }
}
