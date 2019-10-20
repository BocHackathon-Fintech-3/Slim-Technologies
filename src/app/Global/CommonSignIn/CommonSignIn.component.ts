import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'embryo-SignIn',
  templateUrl: './CommonSignIn.component.html',
  styleUrls: ['./CommonSignIn.component.scss']
})
export class CommonSignInComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login(email: string) {
    debugger


    if (email === 'user@mail.com') {
      this.router.navigate(['/account/credit-report']);
    } else if (email === 'admin@mail.com') {

    }

  }

}
