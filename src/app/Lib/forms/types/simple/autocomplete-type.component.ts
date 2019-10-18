import { Component, OnInit, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { MatInput } from '@angular/material/input';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs/operators';

@Component({
    selector: 'formly-autocomplete-type',
    template: `
        <input matInput
               [matAutocomplete]="auto"
               [formControl]="formControl"
               [formlyAttributes]="field"
               [placeholder]="to.placeholder">
        <mat-autocomplete #auto="matAutocomplete">
            <mat-option *ngFor="let value of filter | async" [value]="value">
                {{ value }}
            </mat-option>
        </mat-autocomplete>
    `,
})
export class AutocompleteTypeComponent extends FieldType implements OnInit {
    // Optional: only if you want to rely on `MatInput` implementation
    @ViewChild(MatInput) formFieldControl: MatInput;

    filter: Observable<any>;

    ngOnInit() {
        super.ngOnInit();
        this.filter = this.formControl.valueChanges.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            startWith(''),
            switchMap(term => this.to.filter(term)),
        )
        ;
    }
}
