import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';

@Component({
    selector: 'app-request-quote',
    templateUrl: './request-quote.component.html',
    styleUrls: ['./request-quote.component.scss']
})
export class RequestQuoteComponent implements OnInit {

    @ViewChild('stepper') stepper: MatStepper;

    fillFormStepCompleted = true;
    pickAgenciesStepCompleted = true;
    finishStepCompleted = true;

    constructor(private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
    }


    stepCompleted(stepName: string) {


        if (stepName === 'fillForm') {
            this.fillFormStepCompleted = true;
        } else if (stepName === 'pickAgencies') {
            this.pickAgenciesStepCompleted = true;
        }


        this.cdr.detectChanges();

        this.stepper.next();
    }
}
