import {MatchesColl} from '../../../imports/collections/matches';
import {BetsO2OColl} from '../../../imports/collections/bets-O2O';
import {tcService} from '../services/total-corner';
import {payBets} from '../services/pay-bets';

export class CronVerify {
    verifyStatusMatches() {
        const matchSelector = {
            $and: [
                {status: {$ne: 'full'}},
                {endEstimateDate: {$lte: new Date()}}
            ]
        };

        MatchesColl.collection.find(matchSelector)
            .forEach((match) => {
                const rMatch = MatchesColl.collection.findOne({_id: match._id});
                if (rMatch.status != 'full') {
                    tcService.asyncMatchDetail(rMatch.apiMatchId, rMatch._id);
                }
            });
    }

    verifyStatusBets() {
        let numPaid = 0;
        const betsSelector = {
            $and: [
                {status: 'full'},
                {result: {$exists: true}}
            ]
        };

        BetsO2OColl.collection.find(betsSelector)
            .forEach((bet) => {
                const rBet = BetsO2OColl.collection.findOne({_id: bet._id});
                if (rBet.status === 'full' && rBet.result) {
                    try {
                        payBets.pay(rBet);
                        BetsO2OColl.collection.update({
                            _id: rBet._id
                        }, {
                            $set: {
                                status: 'paid'
                            }
                        });
                        numPaid++;
                    } catch {
                        console.log('Error al actualizar la apuesta ', rBet._id);
                        BetsO2OColl.collection.update({
                            _id: rBet._id
                        }, {
                            $set: {
                                status: 'full'
                            }
                        });
                    }
                }
            });
        console.log('Numero de apuestas pagadas ', numPaid);
    }

}


export const cronVerify = new CronVerify();