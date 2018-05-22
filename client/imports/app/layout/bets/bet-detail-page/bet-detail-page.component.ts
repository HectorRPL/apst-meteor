import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MeteorObservable} from 'meteor-rxjs';
import {BetsO2OColl} from '../../../../../../imports/collections/bets-O2O';
import 'rxjs/add/operator/map';
import {PlayersColl} from '../../../../../../imports/collections/players';
import {BetO2O} from '../../../../../../imports/models/bet-O2O';
import {BetsO2OService} from '../../../services/bets-O2O/bets-o2-o.service';

@Component({
  selector: 'app-bet-detail',
  templateUrl: './bet-detail-page.component.html',
  styleUrls: ['./bet-detail-page.component.scss']
})

export class BetDetailPageComponent implements OnInit {

  betId: string;
  userId: string;
  betO2O: BetO2O;
  shareURL: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private betServ: BetsO2OService) {

    this.shareURL = `${window.location.origin}/${this.router.url}`;
    this.betId = this.route.snapshot.paramMap.get('betId');
    this.userId = Meteor.userId();
  }

  ngOnInit() {
    this.getBet();
  }

  getBet() {
    MeteorObservable.subscribe('betsO2O', {_id: this.betId}).subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.betO2O = this.betServ.getBetO2O({_id: this.betId});
      });
    });
  }
}
