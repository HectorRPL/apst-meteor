import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareModule} from '../../share/share.module';
import {ATMModalComponent} from './components/atm-modal/atm-modal.component';
import {DebitCreditCardFormComponent} from './components/debit-credit-card-form/debit-credit-card-form.component';
import {DepositTypesTabsComponent} from './components/deposit-types-tabs/deposit-types-tabs.component';
import {LogoutComponent} from './components/logout/logout.component';
import {MyAccountModalComponent} from './components/my-account-modal/my-account-modal.component';
import {PasswordFormComponent} from './components/password-form/password-form.component';
import {PlayerFormComponent} from './components/player-form/player-form.component';
import {UserMenuLoggedInComponent} from './components/user-menu-logged-in/user-menu-logged-in.component';
import {UsernameFormComponent} from './components/username-form/username-form.component';
import {ShowUserChipsComponent} from './components/show-user-chips/show-user-chips.component';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ShareModule
  ],
  declarations: [
    ATMModalComponent,
    DebitCreditCardFormComponent,
    DepositTypesTabsComponent,
    LogoutComponent,
    MyAccountModalComponent,
    PasswordFormComponent,
    PlayerFormComponent,
    UserMenuLoggedInComponent,
    UsernameFormComponent,
    ShowUserChipsComponent
  ],
  entryComponents: [
    ATMModalComponent,
    MyAccountModalComponent
  ],
  exports: [
    UserMenuLoggedInComponent
  ]
})
export class LoggedInModule {
}