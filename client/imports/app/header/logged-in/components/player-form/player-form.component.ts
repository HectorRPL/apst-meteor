import {Component, Input, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Player} from '../../../../../../../imports/models/player';
import {MessagesService} from '../../../../services/messages.service';
import {PlayersService} from '../../../../services/players/players.service';

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
              private messageServ:MessagesService,
              private playerServ: PlayersService) {

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
    const newPlayerData = this.newPlayerData();

    this.playerServ.updatePlayer(newPlayerData).subscribe({
      next: (doc) => {
        console.log(doc);
        this.messageServ.add('Done!.', 'success');
      },
      error: (e: Error) => {
        console.log(e);
        this.messageServ.add('Not update', 'danger');
      }
    });

  }

  newPlayerData() {

    const formModel = this.playerFrm.value;
    const newPlayerData = {
      _id: this.player._id,
      ownerId: this.player.ownerId,
      name: formModel.name,
      lastName: formModel.lastName,
      birdDate: formModel.birdDate,
    };

    return newPlayerData;

  }

}