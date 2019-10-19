import {Component, OnInit} from '@angular/core';
import {BankAccount} from '../../bank-accounts/bank-account/bank-account.component';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent implements OnInit {

  bankAccounts: BankAccount[] = [
    // new BankAccount({
    //   bankName: 'Bank of Cyprus',
    //   bankLogo: 'http://api.slimpayments.com/banks/boc.jpg',
    //   number: 'Housing',
    //   balance: '€ 5,200'
    // }),

    new BankAccount({
      bankName: 'Bank of Cyprus',
      bankLogo: 'http://api.slimpayments.com/banks/boc.jpg',
      number: 'Car',
      balance: '€ 6,000'
    }),
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
