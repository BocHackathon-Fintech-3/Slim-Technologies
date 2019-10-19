import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-report',
  templateUrl: './credit-report.component.html',
  styleUrls: ['./credit-report.component.scss']
})
export class CreditReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getColor(value: number): string {
    if (value >= 80) {
      return 'green';
    } else if (value >= 60) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

}
