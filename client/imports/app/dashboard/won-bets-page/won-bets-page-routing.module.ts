import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WonBetsPageComponent} from './won-bets-page.component';


const routes: Routes = [
  {
    path: '', component: WonBetsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WonBetsPageRoutingModule {
}
