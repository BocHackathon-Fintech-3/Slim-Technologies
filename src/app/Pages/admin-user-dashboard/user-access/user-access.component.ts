import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AccountInviteComponent} from '../../UserAccount/account-access/account-invite/account-invite.component';
import {AccountAccess} from '../../UserAccount/account-access/account-access.component';
import {UserAccessRequestComponent} from './user-access-request/user-access-request.component';

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.scss']
})
export class UserAccessComponent {

  access: AccountAccess[] = [
    new AccountAccess({
      name: 'Costas Christoforou',
      logo: '/assets/images/user-1.jpg',
      url: 'costakis@mail.com'
    }),
    new AccountAccess({
      name: 'Thomas Stavrou',
      logo: '/assets/images/user-2.jpg',
      url: 'thomas@mail.com'
    }),
    new AccountAccess({
      name: 'Maria Andreou',
      logo: '/assets/images/user-3.jpg',
      url: 'maria@mail.com'
    }),
    new AccountAccess({
      name: 'Panagiotis Grigoriu',
      logo: '/assets/images/user-4.jpg',
      url: 'panagiotis@mail.com'
    }),
  ];

  constructor(private dialog: MatDialog) {
  }

  invite() {
    let dialogRef = this.dialog.open(UserAccessRequestComponent, {
      height: '210px',
      width: '400px',
    });
  }

}
