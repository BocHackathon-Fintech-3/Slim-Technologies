import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserAccountRoutes } from './UserAccount.routing';
import { AccountComponent } from './Account/Account.component';
import { ProfileComponent } from './Profile/Profile.component';
import { EditProfileComponent } from './EditProfile/EditProfile.component';
import { CardsComponent } from './Cards/Cards.component';
import { AddressComponent } from './Address/Address.component';
import { OrderHistoryComponent } from './OrderHistory/OrderHistory.component';
import { QuoteRequestListComponent } from './quote-requests/quote-request-list/quote-request-list.component';
import { QuoteRequestItemComponent } from './quote-requests/quote-request-list/quote-request-item/quote-request-item.component';
import { MomentModule } from 'ngx-moment';
import { QuoteOfferListComponent } from './quote-offers/quote-offer-list/quote-offer-list.component';
import { QuoteOfferItemComponent } from './quote-offers/quote-offer-list/quote-offer-item/quote-offer-item.component';


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
    ]
})
export class UserAccountModule {
}
