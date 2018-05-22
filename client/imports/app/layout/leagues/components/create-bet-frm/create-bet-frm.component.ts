import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BetO2O} from '../../../../../../../imports/models/bet-O2O';
import {MessagesService} from '../../../../services/messages.service';
import {cantidadBetValidator} from '../../../../directives/validateNumChips';
import {BetsO2OService} from '../../../../services/bets-O2O/bets-o2-o.service';
import {Match} from '../../../../../../../imports/models/match';
import {MatchesService} from '../../../../services/matches/matches.service';
import {ApiMatch} from '../../../../../../../imports//models/api-match';

@Component({
  selector: 'app-create-bet-frm',
  templateUrl: './create-bet-frm.component.html',
  styleUrls: ['./create-bet-frm.component.scss']
})
export class CreateBetFrmComponent implements OnInit {

  @Input() apiMatch: ApiMatch;
  @Input() match: Match;
  @Input() userId: string;
  createBetFrm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private betServ: BetsO2OService,
              private matchServ: MatchesService,
              private messageServ: MessagesService) {
  }

  ngOnInit() {
    this.createFrm();
  }

  createFrm() {
    this.createBetFrm = this.fb.group({
      forecastCreator: ['',
        [
          Validators.required
        ]
      ],
      amount: [
        0,
        [
          Validators.required,
          Validators.min(100)
        ],
        [
          cantidadBetValidator()
        ]
      ],
    });
  }

  onSubmit(): void {

  }

  fillBetO2O(matchId): BetO2O {
    const newBetO2O: BetO2O = {
      matchId: matchId,
      amount: this.createBetFrm.value.amount,
      forecastCreator: this.createBetFrm.value.forecastCreator
    } as BetO2O;

    return newBetO2O;
  }

  createBetO2O(matchId): void {
    const bet = this.fillBetO2O(matchId);
    this.betServ.createBet020(bet).subscribe((result) => {
      this.router.navigate([`/bet/${result.betId}`]);
    }, (e: Error) => {
      this.messageServ.add('Error al crear apuesta', 'danger');
    });

  }

  create() {
    let matchId: string;
    if (this.match) {
      matchId = this.match._id;
      this.createBetO2O(matchId);
    } else {
      this.createMatch();
    }
  }

  fillMatch(): Match {
    const newMatch: Match = {
      home: this.apiMatch.h,
      away: this.apiMatch.a,
      matchStartDate: new Date(this.apiMatch.start),
      scoreHome: Number.parseInt(this.apiMatch.hg),
      scoreAway: Number.parseInt(this.apiMatch.ag),
      apiMatchId: this.apiMatch.id,
    } as Match;

    return newMatch;
  }

  createMatch(): void {
    const match = this.fillMatch();
    this.matchServ.createMatch(match).subscribe((result) => {
      this.createBetO2O(result._id);
    }, (e: Error) => {
      this.messageServ.add('Error al crear apuesta', 'danger');
    });
  }

}
