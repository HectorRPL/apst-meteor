import {MongoObservable} from 'meteor-rxjs';
import {Match} from '../models/match';

export const MatchesColl = new MongoObservable.Collection<Match>('matches');
