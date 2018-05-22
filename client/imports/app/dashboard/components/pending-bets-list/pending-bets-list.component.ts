import {Component, OnInit} from '@angular/core';
import {MeteorObservable} from 'meteor-rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BetsO2OService} from '../../../services/bets-O2O/bets-o2-o.service';
import {DetailPendingBetModalComponent} from '../detail-pending-bet-modal/detail-pending-bet-modal.component';
import {MessagesService} from '../../../services/messages.service';

@Component({
  selector: 'app-pending-bets-list',
  templateUrl: './pending-bets-list.component.html',
  styleUrls: ['./pending-bets-list.component.scss']
})
export class PendingBetsListComponent implements OnInit {

  betsO2O$;

  constructor(private betServ:BetsO2OService,
              private modalService:NgbModal,
              private messageServ:MessagesService) {
  }

  ngOnInit() {
    this.getBetsO2O();
  }

  getBetsO2O():void {

    const userId = Meteor.userId();

    MeteorObservable.subscribe('betsO2O', {
      creatorUserId: userId,
      oponentUserId: {$exists: false}
    }).subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.betsO2O$ = this.betServ.getBetsO2O({
          creatorUserId: userId,
          oponentUserId: {$exists: false}
        }, {});
      });
    });
  }

  openDetailModal(betO2OId:string) {
    const modalRef = this.modalService.open(DetailPendingBetModalComponent,
      {
        size: 'sm'
      }
    );
    modalRef.componentInstance.betO2OId = betO2OId;

  }

  deleteBet020(betId:string):void {
    this.betServ.deleteBet020(betId).subscribe((result) => {
        this.messageServ.add('Success.', 'success');
      }, (e:Error) => {
        console.log(e);
        this.messageServ.add('Error.', 'danger');
      }
    );
  }

}