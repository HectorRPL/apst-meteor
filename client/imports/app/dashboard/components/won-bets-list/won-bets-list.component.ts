import {Component, OnInit} from '@angular/core';
import {MeteorObservable} from 'meteor-rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BetsO2OService} from '../../../services/bets-O2O/bets-o2-o.service';
import {DetailWonBetModalComponent} from '../detail-won-bet-modal/detail-won-bet-modal.component';

@Component({
  selector: 'app-won-bets-list',
  templateUrl: './won-bets-list.component.html',
  styleUrls: ['./won-bets-list.component.scss']
})
export class WonBetsListComponent implements OnInit {

  betsO2O$;

  constructor(private betServ:BetsO2OService,
              private modalService:NgbModal) {
  }

  ngOnInit() {
    this.getBetsO2O();
  }

  getBetsO2O():void {

    const userId = Meteor.userId();

    MeteorObservable.subscribe('betsO2O', {
      creatorUserId: userId,
      winnerId: {$exists: true}
    }).subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.betsO2O$ = this.betServ.getBetsO2O({
          creatorUserId: userId,
          winnerId: {$exists: true}
        }, {});
      });
    });
  }

  openDetailModal(betO2OId:string) {
    const modalRef = this.modalService.open(DetailWonBetModalComponent,
      {
        size: 'sm'
      }
    );
    modalRef.componentInstance.betO2OId = betO2OId;

  }

}