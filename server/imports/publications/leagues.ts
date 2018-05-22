import {League} from '../../../imports/models/league';
import {LeaguesColl} from '../../../imports/collections/leagues';

Meteor.publish('leagues', function (): Mongo.Cursor<League> {
    return LeaguesColl.collection.find({});
});
