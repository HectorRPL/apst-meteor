import {MongoObservable} from 'meteor-rxjs';
import {BetO2O} from '../models/bet-O2O';

export const BetsO2OColl = new MongoObservable.Collection<BetO2O>('betsO2O');

