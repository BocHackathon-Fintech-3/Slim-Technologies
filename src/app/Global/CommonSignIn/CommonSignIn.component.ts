import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'embryo-SignIn',
  templateUrl: './CommonSignIn.component.html',
  styleUrls: ['./CommonSignIn.component.scss']
})
export class CommonSignInComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
  }

  login(email: string) {

    this.loginService.login(email);

    if (!this.loginService.isAdmin()) {
      this.router.navigate(['/account/credit-report']);
    } else {
      this.router.navigate(['/admin/customers']);
    }

  }

}
