import {check} from "meteor/check";
import {_} from "meteor/underscore";
import {BetsO2OColl} from '../../../imports/collections/bets-O2O';
import {ChipsColl} from '../../../imports/collections/chips';

BetsO2OColl.collection.after.insert(function (userId, doc) {
    console.log('despues de insertar ', userId, doc);
    ChipsColl.collection.update({ownerId: userId}, {$inc: {numChips: (-1 * doc.amountCreator)}});
});

BetsO2OColl.collection.after.update(function (userId, doc, fieldNames, modifier, options) {

    check(modifier, {$set: Object});

    if (_.has(modifier.$set, 'status') && modifier.$set.status === 'cancel') {

        ChipsColl.collection.update({ownerId: userId},
            {
                $inc: {numChips: (doc.amountCreator)}
            }
        );
    }

});