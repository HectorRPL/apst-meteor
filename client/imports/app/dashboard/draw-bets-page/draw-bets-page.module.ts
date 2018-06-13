import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomShareModule} from '../../custom-share/custom-share.module';
import {DrawBetsPageRoutingModule} from './draw-bets-page-routing.module';
import {DrawBetsPageComponent} from './draw-bets-page.component';
import {DrawBetsListComponent} from '../components/draw-bets-list/draw-bets-list.component';
import {BetsO2OService} from '../../services/bets-O2O/bets-o2-o.service';


@NgModule({
  imports: [
    CommonModule,
    CustomShareModule,
    DrawBetsPageRoutingModule
  ],
  declarations: [
    DrawBetsPageComponent,
    DrawBetsListComponent
  ],
  providers: [
    BetsO2OService
  ]
})
export class DrawBetsPageModule {
}
