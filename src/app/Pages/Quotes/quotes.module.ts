import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { GlobalModule } from '../../Global/Global.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatStepperModule,
    MatTabsModule
} from '@angular/material';
import { BarRatingModule } from 'ngx-bar-rating';
import { RouterModule } from '@angular/router';
import { QuotesRoutes } from './quotes.routing';
import { InsuranceCategoryMenuComponent } from './request-quote/insurance-category-menu/insurance-category-menu.component';
import { FormModule } from '../../Lib/forms/form.module';
import { InsuranceCarFormComponent } from './request-quote/insurance-car-form/insurance-car-form.component';
import { AgencySelectComponent } from './request-quote/agency-select/agency-select.component';
import { AgencyItemComponent } from './request-quote/agency-select/agency-item/agency-item.component';
import { QuoteThankYouComponent } from './request-quote/quote-thank-you/quote-thank-you.component';
import { DirectivesModule } from '../../Lib/directives/directives.module';

@NgModule({
    declarations: [
        RequestQuoteComponent,
        InsuranceCategoryMenuComponent,
        InsuranceCarFormComponent,
        AgencySelectComponent,
        AgencyItemComponent,
        QuoteThankYouComponent

    ],
    imports: [
        DirectivesModule,
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
        MatRippleModule,
        MatStepperModule,
        FormModule,
        MatCheckboxModule,
        MatTabsModule,
        RouterModule.forChild(QuotesRoutes),
    ]
})
export class QuotesModule {
}
