import {Accounts} from 'meteor/accounts-base';

Meteor.methods({

  updateUsername(username:string) {

    if (!this.userId) {
      throw new Meteor.Error('unauthorized', 'Not logged in');
    }

    const _id = this.userId;

    check(username, String);

    return {
      numDocs: Accounts.setUsername(_id, username) //TODO: No me está regresando documentos actualizados
    };
  }

});