import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Player} from '../../../imports/models/player';
import {PlayersColl} from '../../../imports/collections/players';

Meteor.methods({

    sendVerificationEmail() {

        if (!this.userId) {
            throw new Meteor.Error('unauthorized', 'Not logged in');
        }

        try {
            Meteor.defer(()=> {
                Accounts.sendVerificationEmail(this.userId);
            });

        } catch (err) {
            console.log('Error con Accounts.sendVerificationEmail', new Meteor.Error(err));
            throw new Meteor.Error(err.message);
        }
    },

    updatePlayer(player:Player) {

        if (!this.userId) {
            throw new Meteor.Error('unauthorized', 'Not logged in');
        }

        check(player, {
            _id: String,
            ownerId: String,
            name: String,
            lastName: String,
            birdDate: {
                year: Number,
                month: Number,
                day: Number
            }
        });

        return {
            numDocs: PlayersColl.collection.update({_id: player._id}, {
                $set: {
                    name: player.name,
                    lastName: player.lastName,
                    birdDate: player.birdDate
                }
            })
        };
    }

});
