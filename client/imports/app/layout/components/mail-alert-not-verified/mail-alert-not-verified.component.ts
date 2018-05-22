import {Component, OnInit, Input} from '@angular/core';
import {MeteorObservable} from 'meteor-rxjs/dist/index';
import {IAlert} from '../../../services/messages.model';

@Component({
  selector: 'app-mail-alert-not-verified',
  templateUrl: './mail-alert-not-verified.component.html',
  styleUrls: ['./mail-alert-not-verified.component.scss']
})
export class MailAlertNotVerifiedComponent implements OnInit {

  message:string;
  email$:Meteor.User;

  @Input() public alerts:Array<IAlert> = [];

  constructor() {
  }

  ngOnInit() {
    this.getEmail();
  }

  getEmail():void {
    MeteorObservable.subscribe('verifiedEmail').subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.email$ = Meteor.users.findOne();
        if (this.email$) {
          if (this.email$.emails[0].verified === true) {
            this.email$ = null;
          } else {
            this.message = 'The email ' + this.email$.emails[0].address + ' has not been confirmed. Please check your email.', 'danger';
            console.log(this.message);
            this.alerts.push({
              id: 1,
              type: 'danger',
              message: this.message
            });
          }
        }
      });
    });
  }

  sendEmailVerification():void {
    MeteorObservable
      .call('sendVerificationEmail')
      .subscribe(
        {
          next: () => {
            this.alerts.push({
              id: 2,
              type: 'success',
              message: 'An email will be sent to confirm'
            });
          },
          error: (e:Error) => {
            this.alerts.push({
              id: 3,
              type: 'danger',
              message: 'Email not send'
            });
          }
        }
      );
  }

  public closeAlert(alert:IAlert) {
    const index:number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

}