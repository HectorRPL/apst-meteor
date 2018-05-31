import {BetO2O} from "../../../imports/models/bet-O2O";
import {ChipsColl} from "../../../imports/collections/chips";

export class PayBets {

    pay(bet: BetO2O) {
        if (bet.oponentUserId) {
            if (bet.result === 'tie') {
                ChipsColl.collection.update({
                        ownerId: bet.creatorUserId
                    },
                    {
                        $inc: {numChips: bet.amountCreator}
                    });

                ChipsColl.collection.update({
                        ownerId: bet.oponentUserId
                    },
                    {
                        $inc: {numChips: bet.amountOponent}
                    });
            } else if (bet.result === bet.forecastCreator) {
                ChipsColl.collection.update({
                        ownerId: bet.creatorUserId
                    },
                    {
                        $inc: {numChips: bet.amount}
                    });
            } else {
                ChipsColl.collection.update({
                        ownerId: bet.oponentUserId
                    },
                    {
                        $inc: {numChips: bet.amount}
                    });
            }
        } else {
            ChipsColl.collection.update({
                    ownerId: bet.creatorUserId
                },
                {
                    $inc: {numChips: bet.amountCreator}
                });
        }
    }
}

export const payBets = new PayBets();