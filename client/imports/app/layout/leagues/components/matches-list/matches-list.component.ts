import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss']
})

export class MatchesListComponent implements OnInit {

  @Input() apiMatches;


  constructor() {

  }

  ngOnInit() { }

}
