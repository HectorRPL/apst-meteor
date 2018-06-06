import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {ShareModule} from './share/share.module';
import {HeaderModule} from './header/header.module';
import {FooterModule} from './footer/footer.module';
import {HttpErrorHandlerService} from './services/http-error-handler.service';
import {MessagesService} from './services/messages.service';
import {LeaguesService} from './services/leagues/leagues.service'
import {UsersService} from './services/users/users.service'
import {PlayersService} from './services/players/players.service'
import {AppComponent} from './app.component';

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
    LeaguesService,
    UsersService,
    PlayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
