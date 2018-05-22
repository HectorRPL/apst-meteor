import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MatchesPageComponent} from './matches-page.component';

const routes: Routes = [
  {
    path: '',
    component: MatchesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesPageRoutingModule {
}
