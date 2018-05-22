import {MongoObservable} from 'meteor-rxjs';
import {League} from '../models/league';

export const LeaguesColl = new MongoObservable.Collection<League>('leagues');
