import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomShareModule} from '../custom-share/custom-share.module';
import {HeaderComponent} from './header.component';
import {LoggedInModule} from './logged-in/logged-in.module';
import {LoginModule} from './login/login.module';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    CustomShareModule,
    LoggedInModule,
    LoginModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}