import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {HandleError, HttpErrorHandlerService} from './http-error-handler.service';
import {MeteorObservable, ObservableCursor} from 'meteor-rxjs';
import {LeaguesColl} from '../../../../imports/collections/leagues';
import {League} from '../../../../imports/models/league';

@Injectable()
export class LeaguesService {

  private handleError: HandleError;

  constructor(httpErrorHandler: HttpErrorHandlerService) {

    this.handleError = httpErrorHandler.createHandleError('LeaguesService');
  }

}
