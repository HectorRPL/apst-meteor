import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VerifyEmailRoutingModule} from './verify-email-routing.module';
import {VerifyEmailComponent} from './verify-email.component';
import {ShareModule} from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    VerifyEmailRoutingModule
  ],
  declarations: [
    VerifyEmailComponent
  ]
})
export class VerifyEmailModule {
}
