import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MeteorObservable} from 'meteor-rxjs';
import {ApiMatch} from '../../../../../../imports/models/api-match';

@Component({
  selector: 'app-matches-page',
  templateUrl: './matches-page.component.html',
  styleUrls: ['./matches-page.component.scss']
})
export class MatchesPageComponent implements OnInit {

  matches: [ApiMatch];
  leagueId: string;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => this.leagueId = params.get('leagueId'));
  }

  ngOnInit() {
    this.getMatchesByApiLeagueId();
  }

  getMatchesByApiLeagueId(): void {
    MeteorObservable.autorun().subscribe(() => {
      MeteorObservable.call('getMatches', this.leagueId).subscribe({
        next: (matches) => {
          this.matches = matches;
        },
        error: (e: Error) => {
          console.log(e);
        }
      });
    });
    /* MeteorObservable.subscribe('apiMatches', {l_id: this.leagueId}).subscribe(() => {
       MeteorObservable.autorun().subscribe(() => {
         this.apiMatches$ = ApiMatchesColl.find({l_id: this.leagueId});
       });
     });*/
  }

}
