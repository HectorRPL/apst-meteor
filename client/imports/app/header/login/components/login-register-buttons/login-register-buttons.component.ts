import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {LoginModalComponent} from '../login-modal/login-modal.component';
import {RegisterModalComponent} from '../register-modal/register-modal.component';

@Component({
  selector: 'login-register-buttons',
  templateUrl: './login-register-buttons.component.html',
  styleUrls: ['./login-register-buttons.component.scss']
})
export class LoginRegisterButtonsComponent implements OnInit {

  constructor(private modalService:NgbModal) {
  }

  ngOnInit() {
  }

  openLoginModal() {
    const modalRef = this.modalService.open(
      LoginModalComponent,
      {
        size: 'sm'
      }
    );
  }

  openRegisterModal() {
    const modalRef = this.modalService.open(
      RegisterModalComponent,
      {
        size: 'sm'
      }
    );
  }

}