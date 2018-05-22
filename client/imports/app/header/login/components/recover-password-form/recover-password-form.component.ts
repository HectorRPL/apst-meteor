import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Accounts} from 'meteor/accounts-base';
import {MessagesService} from '../../../../services/messages.service';


@Component({
  selector: 'app-recover-password-form',
  templateUrl: './recover-password-form.component.html',
  styleUrls: ['./recover-password-form.component.scss']
})
export class RecoverPasswordFormComponent implements OnInit {

  showElements:boolean;
  recoverPasswordFrm: FormGroup;

  constructor(private fb:FormBuilder,
              private messageServ:MessagesService) {
    this.showElements = true;
  }

  ngOnInit() {
    this.messageServ.clear();
    this.createForm();
  }

  createForm() {
    this.recoverPasswordFrm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ]
    });
  }

  onSubmit() {
    this.messageServ.clear();

    const credentials = this.createData();

    console.log(credentials.email);
    Accounts.forgotPassword(
      credentials,
      ((err)=> {
      if (err) {
        if (err.error === 403) {
          console.log(err);
          this.messageServ.add('The email is not registered.', 'danger');
        } else {
          console.log(err);
          this.messageServ.add('The email could not be sent. Please, try later.', 'danger');
        }
      } else {
        this.showElements = false;
        this.messageServ.add('An email will be sent to confirm.', 'success');
      }
    }));
  }

  createData() {
    const formModel = this.recoverPasswordFrm.value;
    const email = {
      email: formModel.email
    };

    return email;
  }

}