import {MongoObservable} from 'meteor-rxjs';
import {Chip} from '../models/chip';

export const ChipsColl = new MongoObservable.Collection<Chip>('chips');
