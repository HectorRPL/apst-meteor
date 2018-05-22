import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MessagesComponent} from '../messages/messages.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    MessagesComponent
  ],
  exports: [
    MessagesComponent,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class ShareModule {
}
