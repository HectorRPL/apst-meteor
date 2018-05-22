import {BetO2O} from '../../../imports/models/bet-O2O';
import {BetsO2OColl} from '../../../imports/collections/bets-O2O';
import {Player} from '../../../imports/models/player';
import {PlayersColl} from '../../../imports/collections/players';

Meteor.publishComposite('betsO2O', function (selector): PublishCompositeConfig<BetO2O> {

    return {
        find: () => {
            return BetsO2OColl.collection.find(selector);
        },

        children: [
            <PublishCompositeConfig1<BetO2O, Player>> {
                find: (bet) => {
                    return PlayersColl.collection.find({ownerId: bet.creatorUserId}, {
                        fields: {nickName: 1}
                    });
                }
            }
        ]
    };
});