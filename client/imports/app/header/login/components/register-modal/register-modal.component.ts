import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MessagesService} from '../../../../services/messages.service';


@Component({
  selector: 'register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {

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
