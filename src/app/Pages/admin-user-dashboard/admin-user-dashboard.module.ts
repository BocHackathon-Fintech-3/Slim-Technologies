import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminUserRoutes} from './admin-user-dashboard.routing';
import {AdminAccountComponent} from './admin-account/admin-account.component';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule, MatDialogModule,
  MatExpansionModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
  MatSelectModule,
  MatSidenavModule, MatSliderModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MomentModule} from 'ngx-moment';
import {FormModule} from '../../Lib/forms/form.module';
import {DirectivesModule} from '../../Lib/directives/directives.module';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerReportComponent} from './customer-report/customer-report.component';
import {UserAccountModule} from '../UserAccount/UserAccount.module';
import {UserAccessComponent} from './user-access/user-access.component';
import {UserAccessItemComponent} from './user-access/user-access-item/user-access-item.component';
import {UserAccessRequestComponent} from './user-access/user-access-request/user-access-request.component';
import { CreditProfileComponent } from './credit-profile/credit-profile.component';

@NgModule({
  declarations: [AdminAccountComponent, CustomerListComponent, CustomerReportComponent, UserAccessComponent, UserAccessItemComponent, UserAccessRequestComponent, CreditProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminUserRoutes),
    MatBadgeModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatExpansionModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatChipsModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatSliderModule,
    MatRadioModule,
    MatDialogModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    FormModule,
    DirectivesModule,
    MatRippleModule,
    UserAccountModule
  ],
  entryComponents: [
    UserAccessRequestComponent
  ]
})
export class AdminUserDashboardModule {
}
