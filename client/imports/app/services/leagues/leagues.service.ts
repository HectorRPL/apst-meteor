import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler.service';
import {MeteorObservable, ObservableCursor} from 'meteor-rxjs';
import {LeaguesColl} from '../../../../../imports/collections/leagues';
import {League} from '../../../../../imports/models/league';
import {BetsO2OColl} from "../../../../../imports/collections/bets-O2O";

@Injectable()
export class LeaguesService {

    private handleError: HandleError;
    private leaguesSub: Observable<League[]>;

    constructor(httpErrorHandler: HttpErrorHandlerService) {

        this.handleError = httpErrorHandler.createHandleError('LeaguesService');
    }

    subscribe(name: string, selector, options){
        return MeteorObservable.subscribe(name,  selector, options);
    }

}
