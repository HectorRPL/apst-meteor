import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Accounts} from 'meteor/accounts-base';
import {IAlert} from '../../../services/messages.model';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {

  @Input() token:string;
  showElements:boolean;
  alerts:Array<IAlert> = [];
  resetPasswordFrm: FormGroup;

  constructor(private fb:FormBuilder) {

    this.showElements = true;

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.resetPasswordFrm = this.fb.group({
      password: [
        '',
        [
          Validators.required
        ]
      ]
    });
  }

  onSubmit() {

    const resetPassword = this.createPass();

    console.log(resetPassword.password);
    Accounts.resetPassword(
      this.token,
      resetPassword.password, ((err) => {
          if (err) {
            if (err.error === 403) {
              console.log('//////////// err', err);
              this.alerts.push({id: 1, type: 'danger', message: 'The token has expired.'});
            } else {
              this.alerts.push({id: 2, type: 'danger', message: 'Please, try later.'});
            }
          } else {
            this.alerts.push({id: 4, type: 'success', message: 'Password update!'});
            this.alerts.push({id: 5, type: 'success', message: 'You are register now! Let´s have fun!'});
          }
          this.showElements = false;
        }
      )
    );
  }

  createPass() {
    const formModel = this.resetPasswordFrm.value;
    const password = {
      password: formModel.password
    };

    return password;
  }

}