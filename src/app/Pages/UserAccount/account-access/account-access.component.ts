import {Component, OnInit} from '@angular/core';
import {AccountInviteComponent} from './account-invite/account-invite.component';
import {MatDialog} from '@angular/material';


export class AccountAccess {
  name: string;
  logo: string;
  active: boolean = true;
  url: string;

  constructor(data: Partial<AccountAccess> = {}) {
    Object.assign(this, data);
  }
}

@Component({
  selector: 'app-account-access',
  templateUrl: './account-access.component.html',
  styleUrls: ['./account-access.component.scss']
})
export class AccountAccessComponent {

  access: AccountAccess[] = [
    new AccountAccess({
      name: 'Stefanis Store',
      logo: 'http://www.yourhouseguide.com/wp-content/uploads/2012/11/stefanis-logo1.jpg',
      url: 'www.stephanis.com.cy'
    }),

    new AccountAccess({
      name: 'Atokes',
      logo: '/assets/images/atokes.jpg',
      url: 'www.atokes.com'
    }),

    new AccountAccess({
      name: 'Public',
      logo: 'https://www.kingsavenuemall.com/wp-content/uploads/2017/03/public.jpg',
      url: 'www.public-cyprus.com.cy'
    })
  ];

  constructor(private dialog: MatDialog) {
  }

  invite() {
    let dialogRef = this.dialog.open(AccountInviteComponent, {
      height: '640px',
      width: '600px',
    });
  }

}
