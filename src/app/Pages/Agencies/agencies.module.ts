import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgenciesRoutes } from './agencies.routing';
import { AgencyItemComponent } from './agency-item/agency-item.component';
import { AgencySeachComponent } from './agency-seach/agency-seach.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { AgencyProfileComponent } from './agency-profile/agency-profile.component';
import { AgencyListComponent } from './agency-list/agency-list.component';

@NgModule({
    declarations: [
        AgencyItemComponent,
        AgencySeachComponent,
        AgencyProfileComponent,
        AgencyListComponent,
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        RouterModule.forChild(AgenciesRoutes),
    ]
})
export class AgenciesModule {
}
