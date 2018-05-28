import {ApiMatch} from '../../../imports/models/api-match';
import {Meteor} from 'meteor/meteor';
import {HTTP} from 'meteor/http';
import {MatchesColl} from "../../../imports/collections/matches";

export class TotCornerService {

    private token: string = Meteor.settings.private.totalCorner.token;
    private baseUrl: string = Meteor.settings.private.totalCorner.url;
    private defaultPag = 1;
    private uriMatches = 'league/schedule/';
    private uriMatch = 'match/view/';

    getMatchesByLeague(apiLeagueId: string, page?: number): [ApiMatch] {
        const fPage = page || this.defaultPag;
        const urlMatches = `${this.baseUrl}${this.uriMatches}${apiLeagueId}`;

        const options = {
            params: {token: this.token, page: fPage}
        };
        try {
            const response = HTTP.get(urlMatches, options);
            return response.data.data.matches;
        } catch (e) {
            console.log(e);
            throw new Meteor.Error('Error', 'Error al conectarse con total corner');
        }
    }

    getMatchDetail(apiMatchId): ApiMatch {
        const urlMatch = `${this.baseUrl}${this.uriMatch}${apiMatchId}`;
        const options = {
            params: {token: this.token}
        };

        try {
            const response = HTTP.get(urlMatch, options);

            return response.data.data[0];
        } catch (e) {
            throw new Meteor.Error('Error', 'Error al conectarse con total corner');
        }
    }

    asyncMatchDetail(apiMatchId, matchId) {
        const urlMatch = `${this.baseUrl}${this.uriMatch}${apiMatchId}`;
        const options = {
            params: {token: this.token}
        };

        HTTP.get(urlMatch, options, function (error, response) {
            if (error) {

            } else {
                const apiMatch  = response.data.data[0];
                MatchesColl.collection.update(
                    {_id: matchId},
                    {
                        $set: {
                            status: apiMatch.status,
                            scoreHome: apiMatch.hg,
                            scoreAway: apiMatch.ag,
                        }
                    });
            }
        });
    }
}

export const tcService = new TotCornerService();

