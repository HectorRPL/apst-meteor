import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  token:string;

  constructor(private route:ActivatedRoute) {

    this.route.paramMap.subscribe(params => this.token = params.get('token'));

  }

  ngOnInit() {
  }

}
