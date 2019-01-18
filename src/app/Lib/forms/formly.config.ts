import { AutocompleteTypeComponent } from './types/simple/autocomplete-type.component';
import { RepeatTypeComponent } from './types/advance/repeat-section.component';

export const FORMLY_CONFIG = {
    /**
     * See https://github.com/formly-js/ng-formly/tree/master/demo/src/app
     * for more examples
     */

    types: [
        {
            name: 'autocomplete',
            component: AutocompleteTypeComponent,
            wrappers: ['form-field']
        },
        { name: 'repeat', component: RepeatTypeComponent },
    ],

    wrappers: [
        // { name: 'horizontal', component: HorizontalInputComponent, types: ['horizontal-input'] },
        // { name: 'expandable', component: ExpandableComponent },
    ],
    validationMessages: [
        { name: 'email', message: emailError },
        { name: 'date', message: dateError },
        { name: 'required', message: requiredError },
        { name: 'equal', message: requiredError },
        { name: 'equalTo', message: notEqualError },
        { name: 'validatePhone', message: phoneError },
        { name: 'url', message: urlError },
        { name: 'invalidEmailAddress', message: 'Invalid Email Address' },
        { name: 'maxlength', message: 'Maximum Length Exceeded' },
        { name: 'minlength', message: minLengthError },
        { name: 'not_matching', message: 'Password Not Matching' },
        { name: 'zipCode', message: 'ZIP code should be 5 characters' },
        { name: 'server-error', message: errorMsg },
    ],

};

export function errorMsg(err) {
    return err.toString();
}

export function emailError(err: any, field: any): string {
    return field.templateOptions.label + ' is not a valid email';
}

export function dateError(err: any, field: any): string {
    return field.templateOptions.label + ' is not a valid date';
}

export function requiredError(err: any, field: any): string {
    return field.templateOptions.label + ' is required';
}

export function phoneError(err: any, field: any): string {
    return field.templateOptions.label + ' is not a valid phone';
}

export function notEqualError(err: any, field: any): string {
    return field.templateOptions.label + ' do not match';
}

export function minLengthError(err: any, field: any): string {
    return 'Should have at least ' + err.requiredLength + ' characters.';
}

export function urlError(err: any, field: any) {
    return field.templateOptions.label + ' is not a valid url.';
}
