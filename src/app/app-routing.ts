import { Routes } from '@angular/router';

import { MainComponent } from './Main/Main.component';
import { HomeTwoComponent } from './Pages/Home/HomeTwo/HomeTwo.component';
import { CartComponent } from './Pages/Cart/Cart.component';
import { NotFoundComponent } from './Pages/NotFound/NotFound.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }, {
        path: '',
        component: MainComponent,
        children: [

            {
                path: 'home',
                component: HomeTwoComponent
            },

            {
                path: 'agencies',
                loadChildren: './Pages/Agencies/agencies.module#AgenciesModule'
            },
            {
                path: 'quotes',
                loadChildren: './Pages/Quotes/quotes.module#QuotesModule'
            },

            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: 'not-found',
                component: NotFoundComponent
            },
            {
                path: 'session',
                loadChildren: './Pages/Session/Session.module#SessionModule'
            },
            {
                path: 'checkout',
                loadChildren: './Pages/Checkout/Checkout.module#CheckoutModule'
            },
            {
                path: '',
                loadChildren: './Pages/About/About.module#AboutModule'
            },
            {
                path: 'account',
                loadChildren: './Pages/UserAccount/UserAccount.module#UserAccountModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
