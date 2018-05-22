import {ApiMatch} from '../../../imports/models/api-match';
import {Meteor} from 'meteor/meteor';
import {HTTP} from 'meteor/http';

export class TotCornerService {

    private token: string = Meteor.settings.private.totalCorner.token;
    private baseUrl: string = Meteor.settings.private.totalCorner.url;
    private defaultPag = 1;

    getMatchesByLeague(apiLeagueId: string, page?: number): [ApiMatch] {
        const fPage = page || this.defaultPag;
        const uriMatches = `league/schedule/${apiLeagueId}`;

        const options = {
            params: {token: this.token, page: fPage}
        };
        try {
            const response = HTTP.get(`${this.baseUrl}${uriMatches}`);
            return response.data.data.matches;
        } catch (e) {
            console.log(e);
            throw new Meteor.Error('Error', 'Error al conectarse con total corner');
        }
    }

    getMatchDetail(apiMatchId): ApiMatch {
        const uriMatches = `match/view/${apiMatchId}`;
        const options = {
            params: {token: this.token}
        };

        try {
            const response = HTTP.get(`${this.baseUrl}${uriMatches}`, options);

            return response.data.data[0];
        } catch (e) {
            throw new Meteor.Error('Error', 'Error al conectarse con total corner');
        }
    }
}

export const tcService = new TotCornerService();

