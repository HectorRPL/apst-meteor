import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  expand:boolean

  constructor() {

    this.expand = false;

  }

  ngOnInit() {
  }

  collapse() {

    if (this.expand === false) {
      this.expand = true;
    } else {
      this.expand = false;
    }

  }

}
