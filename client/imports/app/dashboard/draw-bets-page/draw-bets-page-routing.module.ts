import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DrawBetsPageComponent} from './draw-bets-page.component';


const routes: Routes = [
  {
    path: '', component: DrawBetsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawBetsPageRoutingModule {
}
