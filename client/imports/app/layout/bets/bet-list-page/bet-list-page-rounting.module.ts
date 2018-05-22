import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BetListPageComponent} from './bet-list-page.component';

const routes: Routes = [
  {
    path: '', component: BetListPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BetListPageRoutingModule {
}
