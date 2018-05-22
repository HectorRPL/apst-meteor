import {Component, OnInit} from '@angular/core';
import {MeteorObservable} from 'meteor-rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BetsO2OService} from '../../../services/bets-O2O/bets-o2-o.service';
import {DetailDrawBetModalComponent} from '../detail-draw-bet-modal/detail-draw-bet-modal.component';

@Component({
  selector: 'app-draw-bets-list',
  templateUrl: './draw-bets-list.component.html',
  styleUrls: ['./draw-bets-list.component.scss']
})
export class DrawBetsListComponent implements OnInit {

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
      result: 'tie'
    }).subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.betsO2O$ = this.betServ.getBetsO2O({
          creatorUserId: userId,
          result: 'tie'
        }, {});
      });
    });
  }

  openDetailModal(betO2OId:string) {
    const modalRef = this.modalService.open(DetailDrawBetModalComponent,
      {
        size: 'sm'
      }
    );
    modalRef.componentInstance.betO2OId = betO2OId;

  }

}