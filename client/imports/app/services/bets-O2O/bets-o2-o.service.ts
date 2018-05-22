import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BetO2O} from '../../../../../imports/models/bet-O2O';
import {MeteorObservable} from 'meteor-rxjs';
import {BetsO2OColl} from '../../../../../imports/collections/bets-O2O';

@Injectable()
export class BetsO2OService {

  constructor() {
  }


  getBetsO2O(selector: object, options?: object): Observable<BetO2O[]> {
    return BetsO2OColl.find(selector, options);
  }

  getBetO2O(selector: object, options?: object): BetO2O {
    return BetsO2OColl.findOne(selector, options);
  }

  createBet020(bet: BetO2O): Observable<{}> {
    return MeteorObservable.call('insertBetO2O', bet);
  }

  acceptBetO2O(betId: string): Observable<{}> {
   return MeteorObservable.call('acceptBet', {_id: betId});
  }

  deleteBet020(betId: string): Observable<{}> {
    console.log('otra vez we, va la segunda', betId);
    return MeteorObservable.call('deleteBetO2O', {_id: betId});
  }

}
