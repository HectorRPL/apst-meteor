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
            matchId: String,
            amount: Number,
            forecastCreator: String
        });

        bet.amountCreator = bet.amount;
        bet.creatorUserId = this.userId;
        bet.creationDate = new Date();
        bet.status = 'pending';
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
        check(_id, {
            _id: String
        });
        const bet = BetsO2OColl.collection.findOne(_id);
        return {
            betId: BetsO2OColl.collection.update(_id, {
                $set: {
                    oponentUserId: this.userId,
                    acceptDate: new Date(),
                    amountOponent: bet.amount,
                    forecastOponent: bet.forecastCreator === 'home' ? 'away' : 'home'
                },
                $inc:{
                    amount: bet.amount
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
