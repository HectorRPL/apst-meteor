import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NoticeOfPrivacyComponent} from './notice-of-privacy.component';

const routes:Routes = [
  {
    path: '', component: NoticeOfPrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeOfPrivacyRoutingModule {
}
