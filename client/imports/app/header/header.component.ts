import {Component, OnInit} from '@angular/core';
import {MeteorObservable} from 'meteor-rxjs/dist/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userId:string;
  user$;
  fullyCharged:boolean;

  constructor() {
    this.fullyCharged = false;
  }

  ngOnInit() {
    this.getEmail();
  }

  getEmail():void {
    MeteorObservable.subscribe('verifiedEmail').subscribe(() => {
      MeteorObservable.autorun().subscribe(() => {
        this.user$ = Meteor.users.findOne();
        this.fullyCharged = true;
      });
    });
  }

}