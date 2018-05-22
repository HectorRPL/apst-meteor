import {Component, OnInit} from '@angular/core';
import {MeteorObservable} from 'meteor-rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BetsO2OService} from '../../../services/bets-O2O/bets-o2-o.service';
import {DetailLossesBetModalComponent} from '../detail-losses-bet-modal/detail-losses-bet-modal.component';

@Component({
  selector: 'app-losses-bets-list',
  templateUrl: './losses-bets-list.component.html',
  styleUrls: ['./losses-bets-list.component.scss']
})
export class LossesBetsListComponent implements OnInit {

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
      winnerId: {$ne: userId}
    }).subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.betsO2O$ = this.betServ.getBetsO2O({
          creatorUserId: userId,
          winnerId: {$ne: userId, $exists: true}
        }, {});
      });
    });
  }

  openDetailModal(betO2OId:string) {
    const modalRef = this.modalService.open(DetailLossesBetModalComponent,
      {
        size: 'sm'
      }
    );
    modalRef.componentInstance.betO2OId = betO2OId;

  }

}