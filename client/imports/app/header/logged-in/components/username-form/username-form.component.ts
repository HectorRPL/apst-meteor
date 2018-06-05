import {MeteorObservable} from 'meteor-rxjs';
import {Accounts} from 'meteor/accounts-base';
import {Component, Input, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessagesService} from '../../../../services/messages.service';
import {updateUsername} from '../../../../../../../server/imports/methods/users.ts';

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.scss']
})
export class UsernameFormComponent implements  OnChanges {

  @Input() user:any;
  usernameFrm:FormGroup;

  constructor(private fb:FormBuilder,
              private messageServ:MessagesService) {

    this.messageServ.clear();
    this.createForm();

  }

  createForm() {
    this.usernameFrm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[^ /]+$/)
          // Validators.maxLength(30) // TODO: serábuena idea limitar estos caracteres?
        ]
      ]
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    if (this.user) {
      this.usernameFrm.reset({
        username: this.user.username
      });
    }
  }

  onSubmit() {
    this.messageServ.clear();
    const userId = this.userId();
    const newUsername = this.newUsername();

    MeteorObservable.call('updateUsername', newUsername.newUsername).subscribe({
      next: (doc) => {
        console.log('numero de docs actualizados:', doc);
        this.messageServ.add('Done!.', 'success');
      },
      error: (e: Error) => {
        console.log('[err]', e);
        this.messageServ.add('Username not update.', 'danger');
      }
    });
  }


  userId() {

    const userId = {
      userId: Meteor.userId()
    };

    return userId;
  }

  newUsername() {
    const formModel = this.usernameFrm.value;
    const newUsername = {
      newUsername: formModel.username
    };

    return newUsername;
  }

}