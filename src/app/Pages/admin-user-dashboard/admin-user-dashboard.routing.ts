import {Routes} from '@angular/router';
import {AdminAccountComponent} from './admin-account/admin-account.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerReportComponent} from './customer-report/customer-report.component';


export const AdminUserRoutes: Routes = [
  {
    path: '',
    component: AdminAccountComponent,
    children: [
      {path: '', redirectTo: 'customers', pathMatch: 'full'},
      {path: 'customers', component: CustomerListComponent},
      {path: 'customer/report', component: CustomerReportComponent},
    ]
  }
];
