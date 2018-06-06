import {ChipsColl} from '../../../imports/collections/chips';

Meteor.methods({
  getNumChips() {

    // Todo: Verificar con Juan si este código está bien y ¿cómo por qué existe?
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
