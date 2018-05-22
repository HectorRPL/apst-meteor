import {Component, OnInit, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MeteorObservable} from 'meteor-rxjs';
import {BetsO2OService} from '../../../services/bets-O2O/bets-o2-o.service';
import {BetO2O} from "../../../../../../imports/models/bet-O2O";

@Component({
    selector: 'app-detail-pending-bet-modal',
    templateUrl: './detail-pending-bet-modal.component.html',
    styleUrls: ['./detail-pending-bet-modal.component.scss']
})
export class DetailPendingBetModalComponent implements OnInit {

    @Input() betO2OId: string;
    betO2O$: BetO2O;

    constructor(public activeModal: NgbActiveModal,
                private betServ: BetsO2OService) {
    }

    ngOnInit() {
        this.getBetO2O();
    }

    getBetO2O(): void {

        MeteorObservable.subscribe('betsO2O', {
            _id: this.betO2OId
        }).subscribe(() => {
            MeteorObservable.autorun().subscribe(() => {
                this.betO2O$ = this.betServ.getBetO2O({
                    _id: this.betO2OId
                }, {});
            });
        });
    }
}
