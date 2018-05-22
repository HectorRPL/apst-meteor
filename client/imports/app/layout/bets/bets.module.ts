import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BetsComponent} from './bets.component';
import {BetListPageComponent} from "./bet-list-page/bet-list-page.component";
import {BetDetailPageComponent} from "./bet-detail-page/bet-detail-page.component";
import {BetsRoutingModule} from "./bets-routing.module";
import {AcceptBetComponent} from "./components/accept-bet/accept-bet.component";
import {ShareBetComponent} from "./components/share-bet/share-bet.component";
import {BetsO2OService} from "../../services/bets-O2O/bets-o2-o.service";

@NgModule({
    imports: [
        NgbModule,
        CommonModule,
        BetsRoutingModule
    ],
    declarations: [
        BetsComponent,
        BetListPageComponent,
    ],
    providers: [
        BetsO2OService
    ]
})

export class BetsModule {
}
