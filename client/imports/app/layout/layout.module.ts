import {NgModule} from '@angular/core';
import {CustomShareModule} from '../custom-share/custom-share.module';
import {CommonModule} from '@angular/common';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {MailAlertNotVerifiedComponent} from './components/mail-alert-not-verified/mail-alert-not-verified.component';
import {LeaguesPageComponent} from "./leagues/leagues-page/leagues-page.component";
import {TopLeaguesListComponent} from "./leagues/components/top-leagues-list/top-leagues-list.component";
import {LeaguesService} from "../services/leagues/leagues.service";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        CustomShareModule,
        NgxPaginationModule
    ],
    declarations: [
        LayoutComponent,
        MailAlertNotVerifiedComponent,
        LeaguesPageComponent,
        TopLeaguesListComponent
    ],
    entryComponents:[
        LeaguesPageComponent
    ],
    providers: [
        LeaguesService
    ]
})

export class LayoutModule {
}
