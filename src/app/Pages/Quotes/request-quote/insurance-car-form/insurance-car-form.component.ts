import { ChangeDetectorRef, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { MatDialog, MatStepper } from '@angular/material';
import { BaseFormComponent } from '../../../../Lib/forms/base-form-component.class';
import * as moment from 'moment';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router } from '@angular/router';
import { LoadingModalComponent } from '../../loading-modal/loading-modal.component';

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
export class InsuranceCarFormComponent extends BaseFormComponent {

    @Output() completed = new EventEmitter<boolean>();
    @ViewChild('stepper') stepper: MatStepper;
    @BlockUI('formLoader') formLoader: NgBlockUI;

    constructor(private cdr: ChangeDetectorRef,
                private router: Router,
                private dialog: MatDialog) {
        super();
    }

    activedStep = 0;

    model = {};
    steps: StepType[] = [
        {
            label: 'Tell us your Needs',
            completed: false,
            fields: [

                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            className: 'col-4',
                            key: 'third_party_liability',
                            type: 'checkbox',
                            templateOptions: {
                                indeterminate: false,
                                label: 'Third Party Liability',
                            },
                        },

                        {
                            key: 'small_accident_forgiveness',
                            type: 'checkbox',
                            className: 'col-4',
                            templateOptions: {
                                indeterminate: false,
                                label: 'Small Accident Forgiveness ',
                            },
                        },

                        {
                            key: 'windscreen_cover',
                            type: 'checkbox',
                            className: 'col-4',
                            templateOptions: {
                                indeterminate: false,
                                label: 'Windscreen Cover up to €250',
                            },
                        },

                        {
                            key: 'passengers_liability_to_third_parties',
                            type: 'checkbox',
                            className: 'col-4',
                            templateOptions: {
                                indeterminate: false,
                                label: 'Passengers Liability to 3rd Parties',
                            },
                        },

                        {
                            key: 'roadside_business_assistance',
                            type: 'checkbox',
                            className: 'col-4',
                            templateOptions: {
                                indeterminate: false,
                                label: 'Roadside & Business Assistance',
                            },
                        },

                        {
                            key: 'fire',
                            type: 'checkbox',
                            className: 'col-4',
                            templateOptions: {
                                indeterminate: false,
                                label: 'Fire',
                            },
                        },

                        {
                            key: 'theft',
                            type: 'checkbox',
                            className: 'col-4',
                            templateOptions: {
                                indeterminate: false,
                                label: 'Theft',
                            },
                        },

                        {
                            key: 'attempted_theft',
                            type: 'checkbox',
                            className: 'col-4',
                            templateOptions: {
                                indeterminate: false,
                                label: 'Attempted Theft',
                            },
                        },


                        {
                            key: 'own_damage_for_the_insured_vehicle',
                            type: 'checkbox',
                            className: 'col-4',
                            templateOptions: {
                                indeterminate: false,
                                label: 'Own Damage on Insured Vehicle',
                            },
                        },


                        {
                            key: 'attempted_theft',
                            type: 'checkbox',
                            className: 'col-4',
                            templateOptions: {
                                indeterminate: false,
                                label: 'Replacement of Motor Vehicle',
                            },
                        },


                        {
                            key: 'claim_prodection',
                            type: 'checkbox',
                            className: 'col-4',
                            templateOptions: {
                                indeterminate: false,
                                label: 'Claim Protection',
                            },
                        },

                        {
                            key: 'driving_other_cars',
                            type: 'checkbox',
                            className: 'col-4',
                            templateOptions: {
                                indeterminate: false,
                                label: 'Driving Other Cars',
                            },
                        },

                    ],
                }


            ],
        },

        {
            label: 'Car owner personal information',
            completed: false,
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
                            type: 'datepicker',
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
            label: 'Car Information',
            completed: false,
            fields: [

                {
                    fieldGroupClassName: 'row',
                    fieldGroup: [
                        {
                            key: 'registration_number',
                            type: 'input',
                            className: 'col-md-6',
                            templateOptions: {
                                label: ' Registration Number',
                                required: true,
                                keyup: (field: FormlyFieldConfig, event?: any) => {
                                    const value = field.formControl.value as string;

                                    if (value.length !== 6) {
                                        return;
                                    }

                                    const category = this.findField('category', this.steps[2].fields);
                                    const brand = this.findField('brand', this.steps[2].fields);
                                    const model = this.findField('model', this.steps[2].fields);
                                    const type = this.findField('type', this.steps[2].fields);
                                    const date = this.findField('constructionDate', this.steps[2].fields);
                                    const engineSize = this.findField('engineSize', this.steps[2].fields);

                                    this.formLoader.start('Loading your car details');

                                    setTimeout(() => {

                                        category.formControl.setValue(1);
                                        brand.formControl.setValue('TOYOTA');
                                        model.formControl.setValue('CELICA');
                                        type.formControl.setValue('COUPE');
                                        date.formControl.setValue(moment('01/2003', 'MM-YYYY'));
                                        engineSize.formControl.setValue('1796');

                                        category.templateOptions.disabled = true;
                                        brand.templateOptions.disabled = true;
                                        model.templateOptions.disabled = true;
                                        type.templateOptions.disabled = true;
                                        date.templateOptions.disabled = true;
                                        engineSize.templateOptions.disabled = true;

                                        this.formLoader.stop();
                                    }, 2000);

                                }
                            },
                        },
                        {
                            key: 'category',
                            type: 'radio',
                            className: 'col-12',
                            templateOptions: {
                                label: 'Vehicle category',
                                placeholder: 'Category',
                                required: true,
                                options: [
                                    { value: 1, label: 'Passenger vehicle' },
                                    { value: 2, label: 'Commercial vehicle' },
                                ],
                            },
                        },

                        {
                            key: 'brand',
                            type: 'input',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'Brand',
                                required: true,
                            },
                        },

                        {
                            key: 'model',
                            type: 'input',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'Model',
                                required: true,
                            },
                        },


                        {
                            key: 'type',
                            type: 'input',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'Type',
                                required: true,
                            },
                        },

                        {
                            key: 'constructionDate',
                            type: 'datepicker',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'Construction Date',
                                required: true,
                            },
                        },

                        {
                            key: 'engineSize',
                            type: 'input',
                            className: 'col-md-6',
                            templateOptions: {
                                label: 'Engine Size',
                                required: true,
                            },
                        },

                        {
                            key: 'vehicleValue',
                            type: 'input',
                            className: 'col-md-6',
                            templateOptions: {
                                type: 'text',
                                label: 'Vehicle Value',
                                required: true,
                            }
                        },
                    ],
                }


            ],
        }

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

    save(): void {
    }


    submit() {
        this.setLoading(true);
        const dialogRef = this.dialog.open(LoadingModalComponent, {
            width: '300px',
            disableClose: true
        });

        setTimeout(() => {
            dialogRef.close();
            this.router.navigate(['/', 'account', 'offers']);
        }, 2000);

    }


}
