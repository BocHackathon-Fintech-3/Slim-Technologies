import {Component, OnInit} from '@angular/core';
import {BankAccount} from './bank-account/bank-account.component';
import {BankSelectComponent} from './bank-select/bank-select.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.scss']
})
export class BankAccountsComponent implements OnInit {

  bankAccounts: BankAccount[] = [

    new BankAccount({
      bankName: 'Bank of Cyprus',
      bankLogo: 'http://api.slimpayments.com/banks/boc.jpg',
      number: '351092345672'
    }),

    new BankAccount({
      bankName: 'Hellenic Bank',
      bankLogo: 'http://api.slimpayments.com/banks/hellenic.png',
      number: '4567890123456'
    }),
  ];

  constructor(private dialog: MatDialog) {


  }

  addBankAccount() {

    let dialogRef = this.dialog.open(BankSelectComponent, {
      height: '320px',
      width: '400px',
    });

  }

  ngOnInit() {
  }

}
