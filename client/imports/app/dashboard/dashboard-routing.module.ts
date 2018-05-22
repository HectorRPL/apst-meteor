import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
    /*children: [
      {path: '', redirectTo: 'active'},
      {path: 'active',  loadChildren: './active-bets-page/active-bets-page.module#ActiveBetsPageModule'},
      {path: 'pending', loadChildren: './pending-bets-page/pending-bets-page.module#PendingBetsPageModule'},
      {path: 'won',     loadChildren: './won-bets-page/won-bets-page.module#WonBetsPageModule'},
      {path: 'losses',  loadChildren: './losses-bets-page/losses-bets-page.module#LossesBetsPageModule'},
      {path: 'draw',    loadChildren: './draw-bets-page/draw-bets-page.module#DrawBetsPageModule'}

    ]*/
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}