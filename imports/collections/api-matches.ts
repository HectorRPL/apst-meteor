import { MongoObservable } from 'meteor-rxjs';
import { ApiMatch } from '../models/api-match';

export const ApiMatchesColl = new MongoObservable.Collection<ApiMatch>('apiMatches');
