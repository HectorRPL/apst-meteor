import {League} from '../../../imports/models/league';
import {LeaguesColl} from '../../../imports/collections/leagues';
import { Counts } from 'meteor/tmeasday:publish-counts';

Meteor.publish('leagues', function (selector, options): Mongo.Cursor<League> {
    Counts.publish(this, 'numberOfleagues',
        LeaguesColl.collection.find(selector), {noReady: true});

    return LeaguesColl.collection.find(selector, options);
});
