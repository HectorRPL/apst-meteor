import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-share-bet',
  templateUrl: './share-bet.component.html',
  styleUrls: ['./share-bet.component.scss']
})
export class ShareBetComponent implements OnInit {

  @Input() URL:string;

  constructor() {
  }

  ngOnInit() {
  }

}
