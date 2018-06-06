import {Component, OnInit} from '@angular/core';
import {MeteorObservable} from 'meteor-rxjs';
import {ChipsService} from '../../../../services/chips/chips.service';
import {Chip} from '../../../../../../../imports/models/chip';

@Component({
  selector: 'app-show-user-chips',
  templateUrl: './show-user-chips.component.html',
  styleUrls: ['./show-user-chips.component.scss']
})
export class ShowUserChipsComponent implements OnInit {

  chips$: Chip;

  constructor(private chipService:ChipsService) {
  }

  ngOnInit() {
    this.getUserChips()
  }

  getUserChips():void {

    MeteorObservable.subscribe('myChips').subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.chips$ = this.chipService.getUserChips({});
      });
    });
  }

}
