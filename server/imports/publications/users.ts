import {Meteor} from 'meteor/meteor';

Meteor.publish(
    'verifiedEmail',
    function () {
        return Meteor.users.find({_id: this.userId}, {
            fields: {
                emails: 1
            }
        })
    }
);