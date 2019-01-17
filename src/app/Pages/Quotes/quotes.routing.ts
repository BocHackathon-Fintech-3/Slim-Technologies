import { Routes } from '@angular/router';
import { RequestQuoteComponent } from './request-quote/request-quote.component';


export const QuotesRoutes: Routes = [
    {
        path: 'request',
        component: RequestQuoteComponent
    },
];
