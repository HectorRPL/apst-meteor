import {NgModule} from '@angular/core';
import {ShareModule} from '../share/share.module';
import {CommonModule} from '@angular/common';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {MailAlertNotVerifiedComponent} from './components/mail-alert-not-verified/mail-alert-not-verified.component';
import {LeaguesPageComponent} from "./leagues/leagues-page/leagues-page.component";
import {TopLeaguesListComponent} from "./leagues/components/top-leagues-list/top-leagues-list.component";

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        ShareModule
    ],
    declarations: [
        LayoutComponent,
        MailAlertNotVerifiedComponent,
        LeaguesPageComponent,
        TopLeaguesListComponent
    ],
    entryComponents:[
        LeaguesPageComponent
    ]
})

export class LayoutModule {
}
