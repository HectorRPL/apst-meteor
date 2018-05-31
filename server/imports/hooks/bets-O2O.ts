import {check} from "meteor/check";
import {_} from "meteor/underscore";
import {BetsO2OColl} from '../../../imports/collections/bets-O2O';
import {ChipsColl} from '../../../imports/collections/chips';

BetsO2OColl.collection.after.insert(function (userId, doc) {
    ChipsColl.collection.update({ownerId: userId}, {$inc: {numChips: (-1 * doc.amount)}});
});

BetsO2OColl.collection.after.update(function (userId, doc, fieldNames, modifier, options) {

    if (_.has(modifier, '$set')
        &&_.has(modifier.$set, 'status')
        && modifier.$set.status === 'cancel') {

        ChipsColl.collection.update({ownerId: userId},
            {
                $inc: {numChips: (doc.amount)}
            }
        );
    }

    if (_.has(modifier, '$set')
        &&_.has(modifier.$set, 'oponentUserId')) {

        ChipsColl.collection.update({ownerId: userId},
            {
                $inc: {numChips: (-1 * doc.amountOponent)}
            }
        );

    }



});