import {Match} from '../../../imports/models/match';
import {MatchesColl} from '../../../imports/collections/matches';

Meteor.publish('matches', function (): Mongo.Cursor<Match> {
    return MatchesColl.collection.find({});
});
