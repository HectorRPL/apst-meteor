import {Component, Input, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessagesService} from '../../../../services/messages.service';
import {UsersService} from '../../../../services/users/users.service';

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.scss']
})
export class UsernameFormComponent implements  OnChanges {

  @Input() user:any;
  usernameFrm:FormGroup;

  constructor(private fb:FormBuilder,
              private messageServ:MessagesService,
              private userServ: UsersService) {

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
    const newUsername = this.newUsername();

    this.userServ.updateUsername(newUsername.newUsername).subscribe({
      next: (algo) => {
        console.log(algo);
        this.messageServ.add('Done!.', 'success');
      },
      error: (e: Error) => {
        console.log(e);
        this.messageServ.add('Not update', 'danger');
      }
    });
  }

  newUsername() {
    const formModel = this.usernameFrm.value;
    const newUsername = {
      newUsername: formModel.username
    };

    return newUsername;
  }

}