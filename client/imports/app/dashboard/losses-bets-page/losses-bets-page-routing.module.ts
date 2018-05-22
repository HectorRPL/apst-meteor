import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LossesBetsPageComponent} from './losses-bets-page.component';


const routes: Routes = [
  {
    path: '', component: LossesBetsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LossesBetsPageRoutingModule {
}
