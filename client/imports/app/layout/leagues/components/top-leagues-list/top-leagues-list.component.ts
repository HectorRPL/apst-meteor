import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-leagues-list',
  templateUrl: './top-leagues-list.component.html',
  styleUrls: ['./top-leagues-list.component.scss']
})
export class TopLeaguesListComponent implements OnInit {

  @Input() leagues;

  constructor() {
  }

  ngOnInit() {
  }
}
