import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomShareModule} from '../../../custom-share/custom-share.module';
import {MatchesPageComponent} from './matches-page.component';
import {MatchesListComponent} from '../components/matches-list/matches-list.component';
import {MatchesPageRoutingModule} from './matches-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatchesPageRoutingModule,
    CustomShareModule
  ],
  declarations: [
    MatchesPageComponent,
    MatchesListComponent
  ]
})

export class MatchesPageModule {
}
