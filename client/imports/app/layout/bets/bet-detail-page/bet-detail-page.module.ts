import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomShareModule} from '../../../custom-share/custom-share.module';
import {BetDetailPageComponent} from './bet-detail-page.component';
import {BetsDetailRoutingModule} from './bet-detail-page-routing.module';
import {ShareBetComponent} from '../components/share-bet/share-bet.component';
import {AcceptBetComponent} from '../components/accept-bet/accept-bet.component';
import {BetsO2OService} from '../../../services/bets-O2O/bets-o2-o.service';

@NgModule({
  imports: [
    CommonModule,
    CustomShareModule,
    BetsDetailRoutingModule
  ],
  declarations: [
    BetDetailPageComponent,
    ShareBetComponent,
    AcceptBetComponent
  ],
  providers: [
    BetsO2OService
  ]
})
export class BetDetailPageModule {
}
