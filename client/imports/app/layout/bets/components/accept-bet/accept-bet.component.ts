import {Component, Input, OnInit} from '@angular/core';
import {MeteorObservable} from 'meteor-rxjs';
import {MessagesService} from '../../../../services/messages.service';
import {BetsO2OService} from '../../../../services/bets-O2O/bets-o2-o.service';

@Component({
  selector: 'app-accept-bet',
  templateUrl: './accept-bet.component.html',
  styleUrls: ['./accept-bet.component.scss']
})

export class AcceptBetComponent implements OnInit {

  @Input() userId: string;
  @Input() betId: string;

  constructor(private messageServ: MessagesService,
              private betsServ: BetsO2OService) {
  }

  ngOnInit() {

  }

  accept(event) {
    this.betsServ.acceptBetO2O(this.betId).subscribe({
      next: (id) => {
        return id;
      },
      error: (e: Error) => {
        this.messageServ.add('Error al crear apuesta', 'danger');
      }
    });
  }

}
