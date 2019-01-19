import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon, MatSpinner } from '@angular/material';
import { SpinBtnDirective } from './spin-btn.directive';
import { ClickOutsideDirective } from './click-outside.directive';

@NgModule({

    imports: [
        CommonModule
    ],
    declarations: [
        SpinBtnDirective,
        ClickOutsideDirective
    ],
    exports: [
        SpinBtnDirective,
        ClickOutsideDirective
    ],
    entryComponents: [
        MatSpinner,
        MatIcon
    ]
})
export class DirectivesModule {
}
