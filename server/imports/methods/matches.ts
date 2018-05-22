import {Match} from '../../../imports/models/match';
import {MatchesColl} from '../../../imports/collections/matches';

Meteor.methods({
    insertMatch(match: Match) {
        if (!this.userId) {
            throw new Meteor.Error('unauthorized',
                'usuario no logeado');
        }
        check(match, {
            apiMatchId: String,
            home: String,
            away: String,
            matchStartDate: Date,
            status: Match.Maybe(String),
            scoreHome: Number,
            scoreAway: Number
        });

        match.endEstimateDate = new Date(match.matchStartDate);
        match.endEstimateDate.setHours(match.endEstimateDate.getHours() + 2);

        return {
            _id: MatchesColl.collection.insert(match)
        };
    }
});
