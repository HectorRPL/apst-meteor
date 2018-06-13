import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomShareModule} from '../../custom-share/custom-share.module';
import {LossesBetsPageRoutingModule} from './losses-bets-page-routing.module';
import {LossesBetsPageComponent} from './losses-bets-page.component';
import {LossesBetsListComponent} from '../components/losses-bets-list/losses-bets-list.component';
import {BetsO2OService} from '../../services/bets-O2O/bets-o2-o.service';


@NgModule({
  imports: [
    CommonModule,
    CustomShareModule,
    LossesBetsPageRoutingModule
  ],
  declarations: [
    LossesBetsPageComponent,
    LossesBetsListComponent
  ],
  providers: [
    BetsO2OService
  ]
})
export class LossesBetsPageModule {
}
