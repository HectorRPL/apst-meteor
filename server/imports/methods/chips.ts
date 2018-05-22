import {ChipsColl} from '../../../imports/collections/chips';

Meteor.methods({
    getNumChips() {
        let numChips = 0;
        if (this.userId) {
            const chip = ChipsColl.collection.findOne({ownerId: this.userId});
            numChips = chip.numChips;
        }
        return {
            numChips: numChips
        };
    }
});
