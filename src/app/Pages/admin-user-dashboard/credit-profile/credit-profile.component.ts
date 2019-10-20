import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSlider} from '@angular/material';


@Component({
  selector: 'app-credit-profile',
  templateUrl: './credit-profile.component.html',
  styleUrls: ['./credit-profile.component.scss']
})
export class CreditProfileComponent implements OnInit {

  @ViewChild('slider') slider: MatSlider;

  get interest(): string {
    return Math.round(this.slider.value / 18).toLocaleString();
  }

  constructor() {
  }

  ngOnInit() {
  }

  change() {

  }
}
