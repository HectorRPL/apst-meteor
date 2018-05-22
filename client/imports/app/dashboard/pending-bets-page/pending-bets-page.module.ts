import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareModule} from '../../share/share.module';
import {PendingBetsPageComponent} from './pending-bets-page.component';
import {PendingBetsListComponent} from '../components/pending-bets-list/pending-bets-list.component';
import {PendingBetsPageRoutingModule} from './pending-bets-page-routing.module';
import {BetsO2OService} from '../../services/bets-O2O/bets-o2-o.service';


@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    PendingBetsPageRoutingModule
  ],
  declarations: [
    PendingBetsPageComponent,
    PendingBetsListComponent
  ],
  providers: [
    BetsO2OService
  ]
})
export class PendingBetsPageModule {
}
