import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VerifyEmailRoutingModule} from './verify-email-routing.module';
import {VerifyEmailComponent} from './verify-email.component';
import {CustomShareModule} from '../custom-share/custom-share.module';

@NgModule({
  imports: [
    CommonModule,
    CustomShareModule,
    VerifyEmailRoutingModule
  ],
  declarations: [
    VerifyEmailComponent
  ]
})
export class VerifyEmailModule {
}
