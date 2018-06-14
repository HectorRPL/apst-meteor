import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomShareModule} from '../../../custom-share/custom-share.module';
import {BetDetailPageComponent} from './bet-detail-page.component';
import {BetsDetailRoutingModule} from './bet-detail-page-routing.module';
import {ShareBetComponent} from '../components/share-bet/share-bet.component';
import {AcceptBetComponent} from '../components/accept-bet/accept-bet.component';
import {BetsO2OService} from '../../../services/bets-O2O/bets-o2-o.service';
import {HttpClientModule} from '@angular/common/http';
import {ShareModule} from '@ngx-share/core';
import {ShareButtonModule} from '@ngx-share/button';
import {ShowUrlFormComponent} from '../components/show-url-form/show-url-form.component';
import {SocialShareComponent} from '../components/social-share/social-share.component';

@NgModule({
  imports: [
    CommonModule,
    CustomShareModule,
    BetsDetailRoutingModule,
    HttpClientModule,
    ShareModule,
    ShareButtonModule
  ],
  declarations: [
    BetDetailPageComponent,
    ShareBetComponent,
    AcceptBetComponent,
    ShowUrlFormComponent,
    SocialShareComponent
  ],
  providers: [
    BetsO2OService
  ]
})
export class BetDetailPageModule {
}
