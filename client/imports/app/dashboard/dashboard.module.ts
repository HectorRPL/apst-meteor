import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomShareModule} from '../custom-share/custom-share.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {DetailActiveBetModalComponent} from './components/detail-active-bet-modal/detail-active-bet-modal.component';
import {DetailDrawBetModalComponent} from './components/detail-draw-bet-modal/detail-draw-bet-modal.component';
import {DetailLossesBetModalComponent} from './components/detail-losses-bet-modal/detail-losses-bet-modal.component';
import {DetailPendingBetModalComponent} from './components/detail-pending-bet-modal/detail-pending-bet-modal.component';
import {DetailWonBetModalComponent} from './components/detail-won-bet-modal/detail-won-bet-modal.component';
import {ResumeComponent} from './components/resume/resume.component';
import {BetsO2OService} from "../services/bets-O2O/bets-o2-o.service";
import {ActiveBetsPageComponent} from "./active-bets-page/active-bets-page.component";
import {ActiveBetsListComponent} from "./components/active-bets-list/active-bets-list.component";

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        CustomShareModule
    ],
    declarations: [
        DashboardComponent,
        DetailActiveBetModalComponent,
        DetailDrawBetModalComponent,
        DetailLossesBetModalComponent,
        DetailPendingBetModalComponent,
        DetailWonBetModalComponent,
        ResumeComponent,
        ActiveBetsPageComponent,
        ActiveBetsListComponent
    ],
    entryComponents: [
        DetailActiveBetModalComponent,
        DetailDrawBetModalComponent,
        DetailLossesBetModalComponent,
        DetailPendingBetModalComponent,
        DetailWonBetModalComponent
    ],
    providers: [
        BetsO2OService
    ]
})
export class DashboardModule {
}
