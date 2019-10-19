import {Component, OnInit} from '@angular/core';

export class Bank {
  name: string;
  logo: string;
  selected: boolean;
}

@Component({
  selector: 'app-bank-select',
  templateUrl: './bank-select.component.html',
  styleUrls: ['./bank-select.component.scss']
})
export class BankSelectComponent implements OnInit {


  banks: Bank[] = [
    {
      name: 'Bank of Cyprus',
      logo: 'http://api.slimpayments.com/banks/boc.jpg',
      selected: false
    },
    {
      name: 'Hellenic Bank',
      logo: 'http://api.slimpayments.com/banks/hellenic.png',
      selected: false
    }
  ];


  constructor() {
  }

  select(bank: Bank) {
    this.banks.forEach(item => item.selected = false);
    bank.selected = true;
  }

  ngOnInit() {
  }

}
