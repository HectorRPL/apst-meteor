import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PendingBetsPageComponent} from './pending-bets-page.component';

const routes: Routes = [
  {
    path: '', component: PendingBetsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingBetsPageRoutingModule {
}
