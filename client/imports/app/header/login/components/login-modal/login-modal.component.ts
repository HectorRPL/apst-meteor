import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MessagesService} from '../../../../services/messages.service';
import {RecoverPasswordModalComponent} from '../recover-password-modal/recover-password-modal.component';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,
              private modalService:NgbModal,
              private messageServ: MessagesService) {
  }

  ngOnInit() {
  }

  openRecoverPasswordModal() {
    this.activeModal.dismiss('Cross Click');
    const modalRef = this.modalService.open(
      RecoverPasswordModalComponent,
      {
        size: 'lg',
        backdrop : 'static',
        keyboard : false
      }
    );
  }

  closeModal() {
    this.messageServ.clear();
    this.activeModal.dismiss('Cross Click');
  }

}