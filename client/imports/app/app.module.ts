import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpErrorHandlerService} from './services/http-error-handler.service';
import {MessagesService} from './services/messages.service';
import {LeaguesService} from './services/leagues.service'
import {ShareModule} from './share/share.module';
import {HeaderModule} from './header/header.module';
import {FooterModule} from './footer/footer.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ShareModule,
    HeaderModule,
    FooterModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    HttpErrorHandlerService,
    MessagesService,
    LeaguesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
