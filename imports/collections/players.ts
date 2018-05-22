import {MongoObservable} from 'meteor-rxjs';
import {Player} from '../models/player';

export const PlayersColl = new MongoObservable.Collection<Player>('players');
