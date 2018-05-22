import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoticeOfPrivacyRoutingModule} from './notice-of-privacy-routing.module';
import {NoticeOfPrivacyComponent} from './notice-of-privacy.component';

@NgModule({
  imports: [
    CommonModule,
    NoticeOfPrivacyRoutingModule
  ],
  declarations: [
    NoticeOfPrivacyComponent
  ],
  exports: [
    NoticeOfPrivacyComponent
  ]
})
export class NoticeOfPrivacyModule {
}
