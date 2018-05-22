import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Accounts} from 'meteor/accounts-base'
import {MeteorObservable} from 'meteor-rxjs';
import {IAlert} from '../services/messages.model';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  alerts:Array<IAlert> = [];
  token:string;
  expiredLink:boolean;

  constructor(private route:ActivatedRoute) {
    this.expiredLink = true;
    this.route.paramMap.subscribe(
      params => this.token = params.get('token')
    );

  }

  ngOnInit() {
    this.verifyEmail();
  }

  verifyEmail() {
    // TODO existe un error diferente a 403 es el error de autenticación (error: "unauthorized"), para evitarlo hay que usar una validación para que sólo personas logeads puedan usar la siguiente funcion.
    Accounts.verifyEmail(this.token, (err) => {
      if (err) {
        if (err.error === 403) {
          console.log('[err]', err);
          this.expiredLink = true;
          console.log('error porque elcorreo ya está verificado: ', this.expiredLink);
          this.alerts.push({
            id: 1,
            type: 'danger',
            message: 'The token has expired.'
          });
        }

        else {
          console.log('error porque el token ya caducó y debería ser diferente al 403 ("error" de correo que ya se registró): ', this.expiredLink);
          this.alerts.push({
            id: 2,
            type: 'danger',
            message: 'The token has expired.'
          });
          this.expiredLink = true;
        }
      }
      else {
        this.expiredLink = false;
        this.alerts.push({
          id: 3,
          type: 'success',
          message: 'confirmed email. Let´s have fun!'
        });
        console.log('¿expiredLink?: ', this.expiredLink);
      }
    });
  }

  sendEmailVerification():void {
    MeteorObservable
      .call('sendVerificationEmail')
      .subscribe(
        {
          next: () => {
            console.log('se envió otro correo, supuestamente');
            this.expiredLink = false;
            this.alerts.push({
              id: 4,
              type: 'success',
              message: 'An email will be sent to confirm.'
            });
          },
          error: (e:Error) => {
            console.log(e);
            this.alerts.push({
              id: 5,
              type: 'danger',
              message: 'Account verification email was not sent. try later.'
            });
          }
        }
      );
  }

}