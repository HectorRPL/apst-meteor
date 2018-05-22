import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BetsComponent} from './bets.component';
import {BetListPageComponent} from "./bet-list-page/bet-list-page.component";

const routes: Routes = [
  {
    path: '', component: BetsComponent,
    children: [
      {path: '', component: BetListPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetsRoutingModule {
}
