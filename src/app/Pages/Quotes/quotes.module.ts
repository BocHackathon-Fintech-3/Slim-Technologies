import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { GlobalModule } from '../../Global/Global.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule, MatStepperModule,
    MatTabsModule
} from '@angular/material';
import { BarRatingModule } from 'ngx-bar-rating';
import { RouterModule } from '@angular/router';
import { QuotesRoutes } from './quotes.routing';
import { InsuranceCategoryMenuComponent } from './request-quote/insurance-category-menu/insurance-category-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RequestQuoteComponent,
        InsuranceCategoryMenuComponent

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
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        RouterModule.forChild(QuotesRoutes),
    ]
})
export class QuotesModule {
}
