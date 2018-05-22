import { Injectable } from '@angular/core';
import {Match} from '../../../../../imports/models/match';
import {MatchesColl} from '../../../../../imports/collections/matches';
import {Observable} from 'rxjs/Observable';
import {MeteorObservable} from 'meteor-rxjs';

@Injectable()
export class MatchesService {

  constructor() { }


  getMatches(selector: object, options?: object): Observable<Match[]> {
    return MatchesColl.find(selector, options);
  }

  getMatch(selector: object): Match {
    return MatchesColl.findOne(selector);
  }

  createMatch(match: Match): Observable<{}> {
    return MeteorObservable.call('insertMatch', match);
  }
}
