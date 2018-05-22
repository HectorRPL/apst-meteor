import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareModule} from '../share/share.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {DetailActiveBetModalComponent} from './components/detail-active-bet-modal/detail-active-bet-modal.component';
import {DetailDrawBetModalComponent} from './components/detail-draw-bet-modal/detail-draw-bet-modal.component';
import {DetailLossesBetModalComponent} from './components/detail-losses-bet-modal/detail-losses-bet-modal.component';
import {DetailPendingBetModalComponent} from './components/detail-pending-bet-modal/detail-pending-bet-modal.component';
import {DetailWonBetModalComponent} from './components/detail-won-bet-modal/detail-won-bet-modal.component';
import {ResumeComponent} from './components/resume/resume.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShareModule
  ],
  declarations: [
    DashboardComponent,
    DetailActiveBetModalComponent,
    DetailDrawBetModalComponent,
    DetailLossesBetModalComponent,
    DetailPendingBetModalComponent,
    DetailWonBetModalComponent,
    ResumeComponent
  ],
  entryComponents: [
    DetailActiveBetModalComponent,
    DetailDrawBetModalComponent,
    DetailLossesBetModalComponent,
    DetailPendingBetModalComponent,
    DetailWonBetModalComponent
  ]
})
export class DashboardModule {
}
