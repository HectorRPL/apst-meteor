import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareModule} from '../share/share.module';
import {HeaderComponent} from './header.component';
import {LoggedInModule} from './logged-in/logged-in.module';
import {LoginModule} from './login/login.module';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ShareModule,
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