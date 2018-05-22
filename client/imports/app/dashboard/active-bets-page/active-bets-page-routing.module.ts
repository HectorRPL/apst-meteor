import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ActiveBetsPageComponent} from './active-bets-page.component';

const routes: Routes = [
  {
    path: '', component: ActiveBetsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveBetsPageRoutingModule {
}
