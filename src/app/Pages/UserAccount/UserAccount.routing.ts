import {Routes} from '@angular/router';

import {AccountComponent} from './Account/Account.component';
import {ProfileComponent} from './Profile/Profile.component';
import {EditProfileComponent} from './EditProfile/EditProfile.component';
import {CardsComponent} from './Cards/Cards.component';
import {AddressComponent} from './Address/Address.component';
import {OrderHistoryComponent} from './OrderHistory/OrderHistory.component';
import {QuoteRequestListComponent} from './quote-requests/quote-request-list/quote-request-list.component';
import {QuoteOfferListComponent} from './quote-offers/quote-offer-list/quote-offer-list.component';
import {MyPlansComponent} from './my-plans/my-plans.component';
import {BankAccountsComponent} from './bank-accounts/bank-accounts.component';
import {PersonalDetailsComponent} from './personal-details/personal-details.component';
import {VerificationDocumentsComponent} from './verification-documents/verification-documents.component';
import {CreditReportComponent} from './credit-report/credit-report.component';
import {AccountAccessComponent} from './account-access/account-access.component';

export const UserAccountRoutes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },

      {
        path: 'quote-requests',
        component: QuoteRequestListComponent
      },

      {
        path: 'offers',
        component: QuoteOfferListComponent
      },

      {
        path: 'plans',
        component: MyPlansComponent
      },

      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'address',
        component: AddressComponent
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent
      },
      {
        path: 'profile/edit', pathMatch: 'full',
        component: EditProfileComponent
      },

      {
        path: 'bank-accounts',
        component: BankAccountsComponent
      },

      {
        path: 'personal-details',
        component: PersonalDetailsComponent
      },
      {
        path: 'verification-documents',
        component: VerificationDocumentsComponent
      },
      {
        path: 'credit-report',
        component: CreditReportComponent
      },
      {
        path: 'access',
        component: AccountAccessComponent
      }

    ]
  }
];
