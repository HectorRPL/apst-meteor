import {Meteor} from 'meteor/meteor';
import {Player} from '../../../imports/models/player';
import {PlayersColl} from '../../../imports/collections/players';

Meteor.publish('playerLogged',function ():Mongo.Cursor<Player> {
        const selector = {
            ownerId: this.userId
        };
        return PlayersColl.collection.find(selector);
    }
);