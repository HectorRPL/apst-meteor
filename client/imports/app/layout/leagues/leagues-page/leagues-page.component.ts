import {Component, Input, OnInit} from '@angular/core';
import {MeteorObservable, ObservableCursor} from 'meteor-rxjs';
import {LeaguesColl} from '../../../../../../imports/collections/leagues';

@Component({
  selector: 'app-leagues-page',
  templateUrl: './leagues-page.component.html',
  styleUrls: ['./leagues-page.component.scss']
})
export class LeaguesPageComponent implements OnInit {

  leagues$: ObservableCursor<any>;
  constructor() { }

  ngOnInit() {
    this.getTopLeagues();
  }

  getTopLeagues(): void {
    MeteorObservable.subscribe('leagues').subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.leagues$ = LeaguesColl.find({});
      });
    });
  }

}
