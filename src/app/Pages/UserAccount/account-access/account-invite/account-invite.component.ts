import {Component, OnInit} from '@angular/core';
import {ToastaService} from 'ngx-toasta';
import {FormControl} from '@angular/forms';
import {MatDialogRef} from '@angular/material';


export class Company {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-account-invite',
  templateUrl: './account-invite.component.html',
  styleUrls: ['./account-invite.component.scss']
})
export class AccountInviteComponent {

  filterField: FormControl = new FormControl();
  companies: Company[] = [];
  filteredCompanies: Company[] = [];

  constructor(private toastService: ToastaService,
              private dialogRef: MatDialogRef<AccountInviteComponent>) {
    this._setupCompanies();
    this._initCompanyFiltering();
  }

  copy() {
    this.toastService.success({
      title: 'Done',
      msg: 'Your link has been copied!'
    });
  }

  invite() {
    this.toastService.success({
      title: 'Done',
      msg: 'Invitation has been successfully sent!'
    });
    this.dialogRef.close();
  }

  private _setupCompanies() {
    this.companies = [
      {
        name: 'Stefanis Store',
        logo: 'http://www.yourhouseguide.com/wp-content/uploads/2012/11/stefanis-logo1.jpg',
      },
      {
        name: 'Atokes',
        logo: '/assets/images/atokes.jpg',
      },
      {
        name: 'Public',
        logo: 'https://www.kingsavenuemall.com/wp-content/uploads/2017/03/public.jpg',
      },
      {
        name: 'Company 1',
        logo: 'https://marketing.dcassetcdn.com/blog/2016/November/entrepreneur-logos/Logos-06-300x300.png',
      },
      {
        name: 'Company 2',
        logo: 'https://dcassetcdn.com/design_img/850141/462173/462173_4973172_850141_thumbnail.jpg',
      }
      , {
        name: 'Company 3',
        logo: 'https://naldzgraphics.net/wp-content/uploads/2012/03/6-Monkey.jpg',
      }
      , {
        name: 'Company 4',
        logo: 'https://www.kingsavenuemall.com/wp-content/uploads/2017/03/public.jpg',
      }
      , {
        name: 'Company 5',
        logo: 'https://www.kingsavenuemall.com/wp-content/uploads/2017/03/public.jpg',
      }
      , {
        name: 'Company 6',
        logo: 'https://www.kingsavenuemall.com/wp-content/uploads/2017/03/public.jpg',
      }
    ];
  }

  private _initCompanyFiltering() {
    this.filteredCompanies = [...this.companies];
    this.filterField.valueChanges
      .debounceTime(200)
      .subscribe(value => {
        value = value.toLowerCase();
        this.filteredCompanies = [...this.companies.filter(item => item.name.toLowerCase().indexOf(value) !== -1)];
        if (value === '') {
          this.filteredCompanies = [...this.companies];
        }

      });
  }

}
