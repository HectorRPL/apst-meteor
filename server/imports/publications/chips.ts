import {Chip} from '../../../imports/models/chip';
import {ChipsColl} from '../../../imports/collections/chips';

Meteor.publish('myChips', function (): Mongo.Cursor<Chip> {
    return ChipsColl.collection.find({ownerId: this.userId});
});
