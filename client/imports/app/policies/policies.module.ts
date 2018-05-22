import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoliciesRoutingModule} from './policies-routing.module';
import {PoliciesComponent} from './policies.component';

@NgModule({
  imports: [
    CommonModule,
    PoliciesRoutingModule
  ],
  declarations: [
    PoliciesComponent
  ],
  exports: [
    PoliciesComponent
  ]
})
export class PoliciesModule {
}
