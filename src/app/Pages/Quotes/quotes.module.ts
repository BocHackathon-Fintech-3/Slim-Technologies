import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { GlobalModule } from '../../Global/Global.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MAT_CHECKBOX_CLICK_ACTION,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule, MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule, MatProgressSpinnerModule,
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
import { BlockUIModule } from 'ng-block-ui';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';

@NgModule({
    declarations: [
        RequestQuoteComponent,
        InsuranceCategoryMenuComponent,
        InsuranceCarFormComponent,
        AgencySelectComponent,
        AgencyItemComponent,
        QuoteThankYouComponent,
        LoadingModalComponent

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
        MatProgressSpinnerModule,
        MatDividerModule,
        MatRippleModule,
        MatStepperModule,
        FormModule,
        MatCheckboxModule,
        MatDialogModule,
        MatTabsModule,
        BlockUIModule,
        RouterModule.forChild(QuotesRoutes),
    ],

    entryComponents: [
        LoadingModalComponent
    ],
    providers: [
        { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check' }
    ]
})
export class QuotesModule {
}
