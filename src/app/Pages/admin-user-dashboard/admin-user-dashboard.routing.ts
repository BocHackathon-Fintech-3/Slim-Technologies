import {Routes} from '@angular/router';
import {AdminAccountComponent} from './admin-account/admin-account.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerReportComponent} from './customer-report/customer-report.component';
import {PersonalDetailsComponent} from '../UserAccount/personal-details/personal-details.component';
import {UserAccessComponent} from './user-access/user-access.component';


export const AdminUserRoutes: Routes = [
  {
    path: '',
    component: AdminAccountComponent,
    children: [
      {path: '', redirectTo: 'customers', pathMatch: ''},
      {path: 'customers', component: CustomerListComponent},
      {path: 'customer/report', component: CustomerReportComponent},
      {path: 'company', component: PersonalDetailsComponent},
      {path: 'user-access', component: UserAccessComponent},
    ]
  }
];
