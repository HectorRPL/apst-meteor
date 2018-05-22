import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BetListPageComponent} from './bet-list-page.component';
import {ShareModule} from '../../../share/share.module';
import {BetListPageRoutingModule} from './bet-list-page-rounting.module';
import {BetsO2OService} from '../../../services/bets-O2O/bets-o2-o.service';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    BetListPageRoutingModule
  ],
  declarations: [
    BetListPageComponent
  ],
  providers: [
    BetsO2OService
  ]
})
export class BetListPageModule {
}
