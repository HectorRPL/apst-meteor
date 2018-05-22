import {MeteorObservable} from 'meteor-rxjs';
import {Accounts} from 'meteor/accounts-base';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessagesService} from '../../../../services/messages.service';

const now = new Date();

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent implements OnInit {

  registerFrm:FormGroup;
  minDate:any;
  maxDate:any;

  constructor(private fb:FormBuilder,
              private messageServ:MessagesService) {

    this.minDate = {
      year: now.getFullYear() - 70,
      month: now.getMonth(),
      day: now.getDate()
    };

    this.maxDate = {
      year: now.getFullYear() - 18,
      month: now.getMonth() + 1,
      day: now.getDate()
    };

  }

  ngOnInit() {
    this.messageServ.clear();
    this.createForm();
  }

  createForm() {
    this.registerFrm = this.fb.group({
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
      ],
      birdDate: [
        '',
        [
          Validators.required
        ]
      ],
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z\s\d]+$/),
          Validators.maxLength(30)

        ]
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZÁáÉéÍíÓóÚúÑñ\s]+$/),
          Validators.maxLength(30)
        ]
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZÁáÉéÍíÓóÚúÑñ\s]+$/),
          Validators.maxLength(30)
        ]
      ]
    });
  }

  onSubmit() {
    this.messageServ.clear();
    const credentials = this.createUser();

    MeteorObservable.autorun().subscribe(() => {
      Accounts.createUser(credentials, (err) => {
        if (err) {
          this.messageServ.add('Account not created.', 'danger');
        } else {
          this.messageServ.add('You are register now.', 'success');
          this.sendEmailVerification();
        }
        this.registerFrm.reset();
      });
    });
  }

  createUser() {
    const formModel = this.registerFrm.value;
    const newUser = {
      username: formModel.username,
      email: formModel.email,
      password: formModel.password,
      birdDate: formModel.birdDate,
      name: formModel.name,
      lastName: formModel.lastName
    };

    return newUser;
  }

  sendEmailVerification(): void {
    MeteorObservable
      .call('sendVerificationEmail')
      .subscribe({
      next: () => {
        this.messageServ.add('An email will be sent to confirm.', 'success');
      },
      error: (e: Error) => {
        this.messageServ.add('Account verification email was not sent', 'danger');
      }
    });
  }

}