import { ChangeDetectorRef, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../../Lib/components/base-component.class';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { MatStepper } from '@angular/material';

export interface StepType {
    label: string;
    fields: FormlyFieldConfig[];
    completed: boolean;
}


//https://www.coverfox.com

@Component({
    selector: 'app-insurance-car-form',
    templateUrl: './insurance-car-form.component.html',
    styleUrls: ['./insurance-car-form.component.scss']
})
export class InsuranceCarFormComponent extends BaseComponent {

    @Output() completed = new EventEmitter<boolean>();
    @ViewChild('stepper') stepper: MatStepper;

    constructor(private cdr: ChangeDetectorRef) {
        super();
    }

    activedStep = 0;

    model = {};
    steps: StepType[] = [

        {
            label: 'Car owner personal information',
            completed: true,
            fields: [

                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [

                        {
                            key: 'firstname',
                            type: 'input',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'First name',
                                required: true,
                            },
                        },
                        {
                            key: 'lastName',
                            type: 'input',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'Last name',
                                required: true,
                            },
                        },

                        {
                            key: 'birthday',
                            type: 'datepicker',
                            className: 'col-md-6',
                            templateOptions: {
                                type: 'date',
                                label: 'Birthday',
                                required: true,
                            }
                        },

                        {
                            key: 'licenceDate',
                            type: 'input',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'Driver\'s licence issue date',
                                required: true,
                            },
                        },

                        {
                            key: 'phone',
                            type: 'input',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'Phone',
                                required: true,
                            },
                        },

                        {
                            key: 'email',
                            type: 'input',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'Email',
                                required: true,
                            },
                        },

                        {
                            key: 'city',
                            type: 'select',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'City',
                                required: true,
                                options: ['Limassol', 'Nicosia', 'Larnaca', 'Paphos', 'Famagusta'].map(item => {
                                    return { 'value': item, 'label': item };
                                })
                            },
                        },

                        {
                            key: 'address',
                            type: 'input',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'Address',
                                required: true,
                            },
                        },


                    ],
                }

            ],
        },
        {
            label: 'Vehicle Information',
            completed: true,
            fields: [

                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [

                        {
                            key: 'vehicleValue',
                            type: 'input',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'Vehicle Value',
                                required: true,
                            },
                        },
                        {
                            key: 'vehicleUse',
                            type: 'select',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'Vehicle Use',
                                required: true,
                                options: ['Private', 'Commercial'].map(item => {
                                    return { 'value': item, 'label': item };
                                })
                            },
                        },

                        {
                            key: 'registrationNumber',
                            type: 'input',
                            className: 'col-md-6',
                            templateOptions: {
                                type: 'text',
                                label: 'Registration Number',
                                required: true,
                            }
                        },

                        {
                            key: 'coverType',
                            type: 'select',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'Type Of Cover',
                                required: true,
                                options: ['Third Party Only', 'Third Party Fire & Theft', 'Comprehensive'].map(item => {
                                    return { 'value': item, 'label': item };
                                })
                            },
                        },

                    ],
                }


            ],
        },
        {
            label: 'Tell us your Needs',
            completed: true,
            fields: [

                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            key: 'Checkbox',
                            type: 'checkbox',
                            templateOptions: {
                                label: 'Checkbox',
                                required: true,
                            },
                        },

                        {
                            key: 'Checkbox',
                            type: 'checkbox',
                            templateOptions: {
                                label: 'Checkbox',
                                required: true,
                            },
                        },

                        {
                            key: 'Checkbox',
                            type: 'checkbox',
                            templateOptions: {
                                label: 'Checkbox',
                                required: true,
                            },
                        },

                        {
                            key: 'Checkbox',
                            type: 'checkbox',
                            templateOptions: {
                                label: 'Checkbox',
                                required: true,
                            },
                        },

                        {
                            key: 'Checkbox',
                            type: 'checkbox',
                            templateOptions: {
                                label: 'Checkbox',
                                required: true,
                            },
                        },

                    ],
                }


            ],
        },
    ];

    form = new FormArray(this.steps.map(() => new FormGroup({})));
    options = this.steps.map(() => <FormlyFormOptions>{});

    prevStep(step) {
        this.activedStep = step - 1;
    }

    nextStep(step) {

        this.steps[this.activedStep].completed = true;
        this.activedStep = step + 1;
        this.steps[this.activedStep].completed = true;

        this.cdr.detectChanges();

        this.stepper.next();

    }

    submit() {

        this.setLoading(true);

        setTimeout(() => {
            this.completed.emit(true);
        }, 2000);

    }


}
