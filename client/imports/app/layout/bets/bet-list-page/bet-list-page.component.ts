import {Component, OnInit} from '@angular/core';
import {MeteorObservable} from 'meteor-rxjs';
import {Observable} from 'rxjs/Observable';
import {BetO2O} from '../../../../../../imports/models/bet-O2O';
import {BetsO2OService} from '../../../services/bets-O2O/bets-o2-o.service';

@Component({
  selector: 'app-bet-list-page',
  templateUrl: './bet-list-page.component.html',
  styleUrls: ['./bet-list-page.component.scss']
})

export class BetListPageComponent implements OnInit {

  bets$: Observable<BetO2O[]>;
  constructor(private betServ: BetsO2OService) {
  }

  ngOnInit() {
    this.getBets();
  }

  getBets() {
    MeteorObservable.subscribe('betsO2O', {}).subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.bets$ = this.betServ.getBetsO2O({}, {});
      });
    });
  }


}
