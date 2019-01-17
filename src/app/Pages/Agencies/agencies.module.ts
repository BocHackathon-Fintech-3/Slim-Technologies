import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgenciesRoutes } from './agencies.routing';
import { AgencyItemComponent } from './agency-item/agency-item.component';
import { AgencySeachComponent } from './agency-seach/agency-seach.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule, MatTableModule, MatTabsModule
} from '@angular/material';
import { AgencyProfileComponent } from './agency-profile/agency-profile.component';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgencyContactInfoComponent } from './agency-profile/agency-contact-info/agency-contact-info.component';
import { AgencyOffersComponent } from './agency-profile/agency-offers/agency-offers.component';
import { AgencyProductsComponent } from './agency-profile/agency-products/agency-products.component';
import { AgencyMapComponent } from './agency-profile/agency-map/agency-map.component';
import { AgencyHeaderComponent } from './agency-profile/agency-header/agency-header.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { AgmCoreModule } from '@agm/core';
import { GlobalModule } from '../../Global/Global.module';

@NgModule({
    declarations: [
        AgencyItemComponent,
        AgencySeachComponent,
        AgencyProfileComponent,
        AgencyListComponent,
        AgencyContactInfoComponent,
        AgencyMapComponent,
        AgencyOffersComponent,
        AgencyProductsComponent,
        AgencyHeaderComponent,

    ],
    imports: [
        GlobalModule,
        CommonModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatChipsModule,
        BarRatingModule,
        MatDividerModule,
        MatTabsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDuImLr5degIcn4T3396tBpZgfEfsASfeA'
        }),
        RouterModule.forChild(AgenciesRoutes),
    ]
})
export class AgenciesModule {
}
