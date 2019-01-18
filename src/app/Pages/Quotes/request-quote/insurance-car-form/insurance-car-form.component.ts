import { Component } from '@angular/core';
import { BaseComponent } from '../../../../Lib/components/base-component.class';
import { StepType } from '../../../../Lib/forms/types/advance/repeat-section.component';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFormOptions } from '@ngx-formly/core';

@Component({
    selector: 'app-insurance-car-form',
    templateUrl: './insurance-car-form.component.html',
    styleUrls: ['./insurance-car-form.component.scss']
})
export class InsuranceCarFormComponent extends BaseComponent {

    constructor() {
        super();
    }

    activedStep = 0;

    model = {};
    steps: StepType[] = [

        {
            label: 'Car owner personal information',
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
            fields: [
                {
                    key: 'country',
                    type: 'input',
                    templateOptions: {
                        label: 'Country',
                        required: true,
                    },
                },
            ],
        },
    ];

    form = new FormArray(this.steps.map(() => new FormGroup({})));
    options = this.steps.map(() => <FormlyFormOptions>{});

    prevStep(step) {
        this.activedStep = step - 1;
    }

    nextStep(step) {
        this.activedStep = step + 1;
    }

    submit() {
        alert(JSON.stringify(this.model));
    }

}
