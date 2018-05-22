import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from '../../../share/share.module';
import {CreateBetPageRoutingModule} from './create-bet--page-routing.module';
import {CreateBetPageComponent} from './create-bet-page.component';
import {CreateBetFrmComponent} from '../components/create-bet-frm/create-bet-frm.component';
import {BetsO2OService} from '../../../services/bets-O2O/bets-o2-o.service';
import {MatchesService} from '../../../services/matches/matches.service';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    CreateBetPageRoutingModule
  ],
  declarations: [
    CreateBetPageComponent,
    CreateBetFrmComponent
  ],
  providers: [
    BetsO2OService,
    MatchesService
  ]
})
export class CreateBetPageModule { }
