import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MeteorObservable, ObservableCursor} from 'meteor-rxjs';
import {MessagesService} from '../../../../services/messages.service';
import {PlayersColl} from '../../../../../../../imports/collections/players';

@Component({
  selector: 'app-my-account-modal',
  templateUrl: './my-account-modal.component.html',
  styleUrls: ['./my-account-modal.component.scss']
})
export class MyAccountModalComponent implements OnInit {

  player$;
  user$;

  constructor(public activeModal:NgbActiveModal,
              private messageServ:MessagesService) {
  }

  ngOnInit() {
    this.getPlayer();
    this.getUser();
  }

  getPlayer() {
    MeteorObservable
      .subscribe('playerLogged')
      .subscribe(() => {
        MeteorObservable
          .autorun()
          .subscribe(() => {
            this.player$ = PlayersColl.findOne({});
          });
      });
  }

  getUser() {
    this.user$ = Meteor.user();
  }

  closeModal() {
    this.messageServ.clear();
    this.activeModal.dismiss('Cross Click');
  }

}
