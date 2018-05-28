import {check} from "meteor/check";
import {_} from "meteor/underscore";
import {MatchesColl} from "../../../imports/collections/matches";
import {BetsO2OColl} from "../../../imports/collections/bets-O2O";

MatchesColl.collection.after.update(function (userId, doc, fieldNames, modifier, options) {

    check(modifier, {$set: Object});

    if (_.has(modifier.$set, 'status')
        && modifier.$set.status === 'full') {
        let result = '';
        if (modifier.$set.scoreHome > modifier.$set.scoreAway) {
            result = 'home';
        } else if (modifier.$set.scoreHome < modifier.$set.scoreAway) {
            result = 'away';
        } else {
            result = 'tie';
        }

        BetsO2OColl.collection.update({
            matchId: doc._id,
            status: {$ne: 'cancelada'}
        }, {
            $set: {
                status: modifier.$set.status,
                result: result
            }
        }, {
            multi: true
        });
    }

});