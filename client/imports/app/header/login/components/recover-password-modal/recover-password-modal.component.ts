import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MessagesService} from '../../../../services/messages.service';

@Component({
  selector: 'app-recover-password-modal',
  templateUrl: './recover-password-modal.component.html',
  styleUrls: ['./recover-password-modal.component.scss']
})
export class RecoverPasswordModalComponent implements OnInit {

  constructor(public activeModal:NgbActiveModal,
              private messageServ: MessagesService) {
  }

  ngOnInit() {
  }

  closeModal() {
    this.messageServ.clear();
    this.activeModal.dismiss('Cross Click');
  }

}
