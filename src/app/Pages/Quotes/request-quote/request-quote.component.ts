import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { BaseComponent } from '../../../Lib/components/base-component.class';

@Component({
    selector: 'app-request-quote',
    templateUrl: './request-quote.component.html',
    styleUrls: ['./request-quote.component.scss']
})
export class RequestQuoteComponent extends BaseComponent implements OnInit {

    @ViewChild('stepper') stepper: MatStepper;

    fillFormStepCompleted = true;
    pickAgenciesStepCompleted = true;
    finishStepCompleted = true;

    saving: boolean = false;

    constructor(private cdr: ChangeDetectorRef) {
        super();
    }

    ngOnInit() {
    }


    stepCompleted(stepName: string) {

        if (stepName === 'fillForm') {
            this.fillFormStepCompleted = true;
            this.cdr.detectChanges();
            this.stepper.next();

        } else if (stepName === 'pickAgencies') {

            this.saving = true;
            this.pickAgenciesStepCompleted = true;

            setTimeout(() => {
                this.saving = false;
                this.cdr.detectChanges();
                this.stepper.next();
            }, 2000);

        }

    }
}
