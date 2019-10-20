import {Component, Input, OnInit} from '@angular/core';
import {AccountAccess} from '../../../UserAccount/account-access/account-access.component';

@Component({
  selector: 'app-user-access-item',
  templateUrl: './user-access-item.component.html',
  styleUrls: ['./user-access-item.component.scss']
})
export class UserAccessItemComponent implements OnInit {

  @Input()
  access: AccountAccess = new AccountAccess();

  constructor() {
  }

  ngOnInit() {
  }


}
