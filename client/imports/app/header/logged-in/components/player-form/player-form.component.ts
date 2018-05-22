import {Component, Input, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MeteorObservable} from 'meteor-rxjs';
import {Player} from '../../../../../../../imports/models/player';
import {MessagesService} from '../../../../services/messages.service';


const now = new Date();

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnChanges {

  @Input() player:Player;
  playerFrm:FormGroup;
  minDate:any;
  maxDate:any;

  constructor(private fb:FormBuilder,
              private messageServ:MessagesService) {

    this.minDate = {
      year: now.getFullYear() - 70,
      month: now.getMonth(),
      day: now.getDate()
    };

    this.maxDate = {
      year: now.getFullYear() - 18,
      month: now.getMonth() + 1,
      day: now.getDate()
    };
    this.messageServ.clear();
    this.createForm();

  }

  createForm() {
    this.playerFrm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZÁáÉéÍíÓóÚúÑñ\s]+$/),
          Validators.maxLength(30)
        ]
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-ZÁáÉéÍíÓóÚúÑñ\s]+$/),
          Validators.maxLength(30)
        ]
      ],
      birdDate: [
        '',
        [
          Validators.required
        ]
      ],
    });

  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    if (this.player) {
      this.playerFrm.reset({
        name: this.player.name,
        lastName: this.player.lastName,
        birdDate: this.player.birdDate
      });
    }
  }

  onSubmit() {
    this.messageServ.clear();
    const newData = this.newData();

    MeteorObservable.call('updatePlayer', newData).subscribe({
      next: (doc) => {
        this.messageServ.add('Done!', 'success');
      },
      error: (e: Error) => {
        console.log('[err]', e);
        this.messageServ.add('Player not update.', 'danger');
      }
    });

  }

  newData() {

    const formModel = this.playerFrm.value;
    const newData = {
      _id: this.player._id,
      ownerId: this.player.ownerId,
      name: formModel.name,
      lastName: formModel.lastName,
      birdDate: formModel.birdDate,
    };

    return newData;

  }

}