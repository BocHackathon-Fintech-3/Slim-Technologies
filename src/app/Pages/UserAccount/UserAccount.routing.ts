import { Routes } from '@angular/router';

import { AccountComponent } from './Account/Account.component';
import { ProfileComponent } from './Profile/Profile.component';
import { EditProfileComponent } from './EditProfile/EditProfile.component';
import { CardsComponent } from './Cards/Cards.component';
import { AddressComponent } from './Address/Address.component';
import { OrderHistoryComponent } from './OrderHistory/OrderHistory.component';
import { QuoteRequestListComponent } from './quote-requests/quote-request-list/quote-request-list.component';
import { QuoteOfferListComponent } from './quote-offers/quote-offer-list/quote-offer-list.component';
import { MyPlansComponent } from './my-plans/my-plans.component';

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
            }
        ]
    }
];
