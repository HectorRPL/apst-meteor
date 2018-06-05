import {Component, OnInit} from '@angular/core';
import {MeteorObservable} from 'meteor-rxjs';
import {BetsO2OService} from '../../../services/bets-O2O/bets-o2-o.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DetailActiveBetModalComponent} from '../detail-active-bet-modal/detail-active-bet-modal.component';


@Component({
  selector: 'app-active-bets-list',
  templateUrl: './active-bets-list.component.html',
  styleUrls: ['./active-bets-list.component.scss']
})
export class ActiveBetsListComponent implements OnInit {

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
      $or: [
        {creatorUserId: userId},
        {oponentUserId: userId}
      ],
      oponentUserId: {$exists: true}
    }).subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.betsO2O$ = this.betServ.getBetsO2O({
          $or: [
            {creatorUserId: userId},
            {oponentUserId: userId}
          ],
          oponentUserId: {$exists: true},
          result: {$exists: false}
        }, {});
      });
    });
  }

  openDetailModal(betO2OId:string) {
    const modalRef = this.modalService.open(DetailActiveBetModalComponent,
      {
        size: 'sm'
      }
    );
    modalRef.componentInstance.betO2OId = betO2OId;

  }

}