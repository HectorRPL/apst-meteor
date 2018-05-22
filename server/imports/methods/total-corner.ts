import {tcService} from '../services/total-corner';
import {ApiMatch} from '../../../imports/models/api-match';

Meteor.methods({
    getMatches(leagueId: string, page?: number): [ApiMatch] {
        return tcService.getMatchesByLeague(leagueId);
    },
    getApiMatch(matchId: string): ApiMatch {
        return tcService.getMatchDetail(matchId);
    }
});