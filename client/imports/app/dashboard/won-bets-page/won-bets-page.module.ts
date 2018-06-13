import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomShareModule} from '../../custom-share/custom-share.module';
import {WonBetsPageRoutingModule} from './won-bets-page-routing.module';
import {WonBetsPageComponent} from './won-bets-page.component';
import {WonBetsListComponent} from '../components/won-bets-list/won-bets-list.component';
import {BetsO2OService} from '../../services/bets-O2O/bets-o2-o.service';


@NgModule({
  imports: [
    CommonModule,
    CustomShareModule,
    WonBetsPageRoutingModule
  ],
  declarations: [
    WonBetsPageComponent,
    WonBetsListComponent
  ],
  providers: [
    BetsO2OService
  ]
})
export class WonBetsPageModule {
}
