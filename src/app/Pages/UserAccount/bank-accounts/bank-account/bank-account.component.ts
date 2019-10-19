import {Component, Input, OnInit} from '@angular/core';


export class BankAccount {
  number: string;
  bankName: string;
  bankLogo: string;

  constructor(data: Partial<BankAccount> = {}) {
    Object.assign(this, data);
  }
}


@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {

  @Input()
  account: BankAccount = new BankAccount();

  constructor() {
  }

  ngOnInit() {
  }

}
