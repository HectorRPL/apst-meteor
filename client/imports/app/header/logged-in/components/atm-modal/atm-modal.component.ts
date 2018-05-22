import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'atm-modal',
  templateUrl: './atm-modal.component.html',
  styleUrls: ['./atm-modal.component.scss']
})
export class ATMModalComponent implements OnInit {

  constructor(public activeModal:NgbActiveModal) {
  }

  ngOnInit() {
  }

}