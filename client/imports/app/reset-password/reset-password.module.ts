import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomShareModule} from '../custom-share/custom-share.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ResetPasswordComponent} from './reset-password.component';
import {ResetPasswordRoutingModule} from './reset-password-routing.module';
import {ResetPasswordFormComponent} from './components/reset-password-form/reset-password-form.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomShareModule,
    ResetPasswordRoutingModule
  ],
  declarations: [
    ResetPasswordComponent,
    ResetPasswordFormComponent
  ]
})
export class ResetPasswordModule {}
