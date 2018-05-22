import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareModule} from '../../share/share.module';
import {ActiveBetsPageComponent} from './active-bets-page.component';
import {ActiveBetsPageRoutingModule} from './active-bets-page-routing.module';
import {ActiveBetsListComponent} from '../components/active-bets-list/active-bets-list.component';
import {BetsO2OService} from '../../services/bets-O2O/bets-o2-o.service';


@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    ActiveBetsPageRoutingModule
  ],
  declarations: [
    ActiveBetsPageComponent,
    ActiveBetsListComponent
  ],
  providers: [
    BetsO2OService
  ]
})
export class ActiveBetsPageModule {
}
