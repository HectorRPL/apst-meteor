import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessagesService} from '../../../../services/messages.service';
import {Meteor} from 'meteor/meteor';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  @Output() loginSuccess = new EventEmitter();
  loginFrm: FormGroup;

  constructor(private fb:FormBuilder,
              private messageServ: MessagesService) {
  }

  ngOnInit() {
    this.messageServ.clear();
    this.createForm();
  }

  createForm() {
    this.loginFrm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required
        ]
      ]
    });
  }

  onSubmit() {

    Meteor.loginWithPassword(
      {
        email: this.loginFrm.value.email
      },
      this.loginFrm.value.password,
      (err) => {
        if (err) {
          this.messageServ.add('Email & password do not match',  'danger');
        } else {
          this.loginSuccess.emit();
        }
        this.loginFrm.reset();
      }
    );
  }

}
