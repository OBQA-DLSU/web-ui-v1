import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgModel } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';

import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @Output() cancel = new EventEmitter<boolean> ();
  @Output() signupData = new EventEmitter<IUser> ();

  private signupForm: FormGroup; 

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      fname: new FormControl('',Validators.required),
      lname: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',Validators.required),
      confirmation: new FormControl('',Validators.required),
      invitationCode: new FormControl('',Validators.required)
    });
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      fname: new FormControl('',Validators.required),
      lname: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confirmation: new FormControl('',Validators.required),
      invitationCode: new FormControl('',Validators.required)
    });
  }

  signupCancel(): void{
    this.cancel.emit(false);
  }

  onSubmit(): void{
      this.signupData.emit(this.signupForm.value);
  }

}
