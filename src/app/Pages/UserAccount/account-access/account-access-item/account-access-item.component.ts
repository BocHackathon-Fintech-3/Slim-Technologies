import {Component, Input, OnInit} from '@angular/core';
import {AccountAccess} from '../account-access.component';

@Component({
  selector: 'app-account-access-item',
  templateUrl: './account-access-item.component.html',
  styleUrls: ['./account-access-item.component.scss']
})
export class AccountAccessItemComponent implements OnInit {

  @Input()
  access: AccountAccess = new AccountAccess();

  constructor() {
  }

  ngOnInit() {
  }

}
