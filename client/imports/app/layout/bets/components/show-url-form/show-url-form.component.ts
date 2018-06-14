import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShareButtons} from '@ngx-share/core';

@Component({
  selector: 'app-show-url-form',
  templateUrl: './show-url-form.component.html',
  styleUrls: ['./show-url-form.component.scss']
})
export class ShowUrlFormComponent implements OnInit {

  @Input() URL:string;
  showURLFrm:FormGroup;

  constructor(private fb:FormBuilder,
              public share:ShareButtons) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.showURLFrm = this.fb.group({
      url: [
        this.URL,
        [
          Validators.required,
        ]
      ],
    });
  }

}
