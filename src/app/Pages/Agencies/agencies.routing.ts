import { Routes } from '@angular/router';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgencyProfileComponent } from './agency-profile/agency-profile.component';


export const AgenciesRoutes: Routes = [
    {
        path: '',
        component: AgencyListComponent
    },
    {
        path: ':id',
        component: AgencyProfileComponent
    },
];
