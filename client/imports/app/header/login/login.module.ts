import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomShareModule} from '../../custom-share/custom-share.module';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {LoginModalComponent} from './components/login-modal/login-modal.component';
import {LoginRegisterButtonsComponent} from './components/login-register-buttons/login-register-buttons.component';
import {RecoverPasswordFormComponent} from './components/recover-password-form/recover-password-form.component';
import {RecoverPasswordModalComponent} from './components/recover-password-modal/recover-password-modal.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {RegisterModalComponent} from './components/register-modal/register-modal.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    CustomShareModule
  ],
  declarations: [
    LoginFormComponent,
    LoginModalComponent,
    LoginRegisterButtonsComponent,
    RecoverPasswordFormComponent,
    RecoverPasswordModalComponent,
    RegisterFormComponent,
    RegisterModalComponent
  ],
  entryComponents: [
    LoginModalComponent,
    RegisterModalComponent,
    RecoverPasswordModalComponent
  ],
  exports: [
    LoginRegisterButtonsComponent
  ]
})

export class LoginModule {
}