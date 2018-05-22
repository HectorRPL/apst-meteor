import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  logoutUser() {
    Meteor.logout(
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Exito al cerrar sesión de usuario');
        }
      }
    );
  }

}
