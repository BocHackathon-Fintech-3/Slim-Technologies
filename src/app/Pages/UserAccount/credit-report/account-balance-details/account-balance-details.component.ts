import {Component, OnInit} from '@angular/core';
import {BankAccount} from '../../bank-accounts/bank-account/bank-account.component';

@Component({
  selector: 'app-account-balance-details',
  templateUrl: './account-balance-details.component.html',
  styleUrls: ['./account-balance-details.component.scss']
})
export class AccountBalanceDetailsComponent implements OnInit {

  bankAccounts: BankAccount[] = [
    new BankAccount({
      bankName: 'Bank of Cyprus',
      bankLogo: 'http://api.slimpayments.com/banks/boc.jpg',
      number: '351092345672',
      balance: '€ 5,200'
    }),

    new BankAccount({
      bankName: 'Hellenic Bank',
      bankLogo: 'http://api.slimpayments.com/banks/hellenic.png',
      number: '4567890123456',
      balance: '€ 2,100'
    }),
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
