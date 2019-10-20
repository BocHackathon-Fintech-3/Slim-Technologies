import {Component, OnInit} from '@angular/core';
import {LoginService} from '../CommonSignIn/login.service';

@Component({
  selector: 'embryo-HeaderUserProfileDropdown',
  templateUrl: './HeaderUserProfileDropdown.component.html',
  styleUrls: ['./HeaderUserProfileDropdown.component.scss']
})
export class HeaderUserProfileDropdownComponent implements OnInit {

  userImage: string;

  constructor(private loginService: LoginService) {

    if (loginService.isAdmin()) {
      this.userImage = '/assets/images/atokes.jpg';
    } else {
      this.userImage = 'assets/media/thomas.jpg';
    }


  }

  ngOnInit() {
  }

}
