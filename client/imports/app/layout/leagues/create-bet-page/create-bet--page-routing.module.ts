import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateBetPageComponent} from './create-bet-page.component';

const routes: Routes = [
  {
    path: '',
    component: CreateBetPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateBetPageRoutingModule {
}
