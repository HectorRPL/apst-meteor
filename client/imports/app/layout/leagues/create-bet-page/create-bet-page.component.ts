import {Component, OnInit} from '@angular/core';
import {ApiMatch} from '../../../../../../imports/models/api-match';
import {ActivatedRoute} from '@angular/router';
import {MeteorObservable} from 'meteor-rxjs';
import {ChipsColl} from '../../../../../../imports/collections/chips';
import {MatchesService} from '../../../services/matches/matches.service';
import {Match} from '../../../../../../imports/models/match';

@Component({
  selector: 'app-create-bet-page',
  templateUrl: './create-bet-page.component.html',
  styleUrls: ['./create-bet-page.component.scss']
})


export class CreateBetPageComponent implements OnInit {

  apiMatch: ApiMatch;
  match: Match;
  chips$;
  matchId: string;
  leagueId: string;
  userId: string;

  constructor(private route: ActivatedRoute,
              private matchServ: MatchesService) {
    this.route.paramMap.subscribe((params) => {
      this.leagueId = params.get('leagueId');
      this.matchId = params.get('matchId');
    });
  }

  ngOnInit() {
    this.getApiMatch();
    this.getUserId();
    this.getMatch();
  }

  getApiMatch() {
    MeteorObservable.autorun().subscribe(() => {
      MeteorObservable.call('getApiMatch', this.matchId).subscribe({
        next: (apiMatch) => {
          this.apiMatch = apiMatch;
        },
        error: (e: Error) => {
          console.log(e);
        }
      });
    });
  }

  getUserId() {
    MeteorObservable.autorun().subscribe(() => {
      this.userId = Meteor.userId();
    });
  }

  getMatch(){

    MeteorObservable.subscribe('matches', {apiMatchId: this.matchId}).subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.match = this.matchServ.getMatch({apiMatchId: this.matchId});;
      });
    });

  }
}
