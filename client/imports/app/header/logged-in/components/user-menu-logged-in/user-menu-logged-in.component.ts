import {Component, OnInit, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ATMModalComponent} from '../atm-modal/atm-modal.component';
import {MyAccountModalComponent} from '../my-account-modal/my-account-modal.component';

@Component({
  selector: 'user-menu-logged-in',
  templateUrl: './user-menu-logged-in.component.html',
  styleUrls: ['./user-menu-logged-in.component.scss']
})

export class UserMenuLoggedInComponent implements OnInit {

  @Input() user;

  constructor(private modalService:NgbModal) {
  }

  ngOnInit() {
  }

  openATMModal() {
    const modalRef = this.modalService.open(
      ATMModalComponent,
      {
        size: 'lg',
        backdrop: 'static',
        keyboard: false
      }
    );
  }

  openMyAccountModal() {
    const modalRef = this.modalService.open(
      MyAccountModalComponent,
      {
        size: 'lg'
      }
    );
  }
}