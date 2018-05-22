import {MeteorObservable} from 'meteor-rxjs';
import {Accounts} from 'meteor/accounts-base';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessagesService} from '../../../../services/messages.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {

  passwordFrm: FormGroup;

  constructor(private fb:FormBuilder,
              private messageServ: MessagesService) {
  }

  ngOnInit() {
    this.messageServ.clear();
    this.createForm();
  }

  createForm() {
    this.passwordFrm = this.fb.group({
      newPassword: [
        '',
        [
          Validators.required
        ]
      ],
      oldPassword: [
        '',
        [
          Validators.required
        ]
      ]
    });
  }

  onSubmit() {
    this.messageServ.clear();
    const oldPass = this.oldPass();
    const newPass = this.newPass();

    MeteorObservable.autorun().subscribe(() => {
      Accounts.changePassword(oldPass.oldPassword, newPass.newPassword, (err) => {
        if (err) {
          if (err.error === 403){
            this.messageServ.add('Passworld incorrect.', 'danger');
          }
          console.log('[err]', err);
          this.messageServ.add('Passworld not update.', 'danger');
        } else {
          this.messageServ.add('Done!.', 'success');
        }
        this.passwordFrm.reset();
      });
    });

  }

  oldPass() {
    const formModel = this.passwordFrm.value;
    const oldPass = {
      oldPassword: formModel.oldPassword
    };

    return oldPass;
  }

  newPass() {
    const formModel = this.passwordFrm.value;
    const newPass = {
      newPassword: formModel.newPassword
    };

    return newPass;
  }

}
