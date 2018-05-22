import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BetDetailPageComponent} from './bet-detail-page.component';

const routes: Routes = [
  {
    path: '', component: BetDetailPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetsDetailRoutingModule {
}
