import {BetO2O} from '../../../imports/models/bet-O2O';
import {BetsO2OColl} from '../../../imports/collections/bets-O2O';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
    insertBetO2O(bet: BetO2O) {
        if (!this.userId) {
            throw new Meteor.Error('unauthorized',
                'usuario no logeado');
        }

        check(bet, {
            status: Match.Maybe(String),
            matchId: String,
            amount: Number,
            forecastCreator: String
        });

        bet.creatorUserId = this.userId;
        bet.creationDate = new Date();
        bet.public = true;

        return {
            betId: BetsO2OColl.collection.insert(bet)
        };
    },
    acceptBet(_id: string) {
        if (!this.userId) {
            throw new Meteor.Error('unauthorized',
                'usuario no logeado');
        }
        console.log(_id);
        check(_id, {
            _id: String
        });
        const bet = BetsO2OColl.collection.findOne(_id);
        console.log(bet);
        return {
            betId: BetsO2OColl.collection.update(_id, {
                $set: {
                    oponentUserId: this.userId,
                    acceptDate: new Date(),
                    forecastOponent: bet.forecastCreator === 'home' ? 'away' : 'home'
                }
            })
        };
    },
    deleteBetO2O(_id: string) {
        if (!this.userId) {
            throw new Meteor.Error('unauthorized',
                'usuario no logeado');
        }
        check(_id, {
            _id: String
        });

        return {
            betId: BetsO2OColl.collection.update(_id, {
                $set: {
                    status: 'cancel'
                }
            })
        };
    },
});
