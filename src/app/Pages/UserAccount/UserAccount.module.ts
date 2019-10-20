import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule, MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UserAccountRoutes} from './UserAccount.routing';
import {AccountComponent} from './Account/Account.component';
import {ProfileComponent} from './Profile/Profile.component';
import {EditProfileComponent} from './EditProfile/EditProfile.component';
import {CardsComponent} from './Cards/Cards.component';
import {AddressComponent} from './Address/Address.component';
import {OrderHistoryComponent} from './OrderHistory/OrderHistory.component';
import {QuoteRequestListComponent} from './quote-requests/quote-request-list/quote-request-list.component';
import {QuoteRequestItemComponent} from './quote-requests/quote-request-list/quote-request-item/quote-request-item.component';
import {MomentModule} from 'ngx-moment';
import {QuoteOfferListComponent} from './quote-offers/quote-offer-list/quote-offer-list.component';
import {QuoteOfferItemComponent} from './quote-offers/quote-offer-list/quote-offer-item/quote-offer-item.component';
import {MyPlansComponent} from './my-plans/my-plans.component';
import {MyPlanItemComponent} from './my-plans/my-plan-item/my-plan-item.component';
import {PersonalDetailsComponent} from './personal-details/personal-details.component';
import {VerificationDocumentsComponent} from './verification-documents/verification-documents.component';
import {BankAccountsComponent} from './bank-accounts/bank-accounts.component';
import {CreditReportComponent} from './credit-report/credit-report.component';
import {AccountAccessComponent} from './account-access/account-access.component';
import {FormlyModule} from '@ngx-formly/core';
import {FormModule} from '../../Lib/forms/form.module';
import {DirectivesModule} from '../../Lib/directives/directives.module';
import {VerificationDocumentComponent} from './verification-documents/verification-document/verification-document.component';
import {BankAccountComponent} from './bank-accounts/bank-account/bank-account.component';
import {BankSelectComponent} from './bank-accounts/bank-select/bank-select.component';
import {AccountAccessItemComponent} from './account-access/account-access-item/account-access-item.component';
import {AccountInviteComponent} from './account-access/account-invite/account-invite.component';
import {AccountBalanceDetailsComponent} from './credit-report/account-balance-details/account-balance-details.component';
import {SpendigHabitsComponent} from './credit-report/spendig-habits/spendig-habits.component';
import {LoanDetailsComponent} from './credit-report/loan-details/loan-details.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserAccountRoutes),
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
    MatRippleModule
  ],
  declarations: [
    AccountComponent,
    ProfileComponent,
    EditProfileComponent,
    CardsComponent,
    AddressComponent,
    OrderHistoryComponent,
    QuoteRequestListComponent,
    QuoteRequestItemComponent,
    QuoteOfferListComponent,
    QuoteOfferItemComponent,
    MyPlansComponent,
    MyPlanItemComponent,
    PersonalDetailsComponent,
    VerificationDocumentsComponent,
    BankAccountsComponent,
    CreditReportComponent,
    AccountAccessComponent,
    VerificationDocumentComponent,
    BankAccountComponent,
    BankSelectComponent,
    AccountAccessItemComponent,
    AccountInviteComponent,
    AccountBalanceDetailsComponent,
    SpendigHabitsComponent,
    LoanDetailsComponent
  ],
  entryComponents: [
    BankSelectComponent,
    AccountInviteComponent
  ],
  exports: [
    AccountBalanceDetailsComponent,
    LoanDetailsComponent,
    SpendigHabitsComponent,
    CreditReportComponent,
    PersonalDetailsComponent,
    VerificationDocumentsComponent

  ]
})
export class UserAccountModule {
}
