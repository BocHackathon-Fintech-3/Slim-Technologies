import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FORMLY_CONFIG } from './formly.config';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { AutocompleteTypeComponent } from './types/simple/autocomplete-type.component';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule } from '@angular/material-moment-adapter';
import { RepeatTypeComponent } from './types/advance/repeat-section.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot(FORMLY_CONFIG),
        FormlyMaterialModule,
        MatMomentDateModule,
        FormlyMatDatepickerModule,
        MatAutocompleteModule,
        MatInputModule
    ],
    declarations: [
        AutocompleteTypeComponent,
        RepeatTypeComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        FormlyModule,
        FormlyMaterialModule,
        AutocompleteTypeComponent
    ],
    providers: [
        { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
    ]
})
export class FormModule {
}
