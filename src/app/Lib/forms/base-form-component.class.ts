import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from '../components/base-component.class';

export interface IFormComponent {
    save(): void;

    setupFormFields?(): void;
}

export abstract class BaseFormComponent extends BaseComponent implements IFormComponent {

    saving: boolean = false;
    form = new FormGroup({});
    formFields: FormlyFieldConfig[] = [];


    submit() {

        Object.keys(this.form.controls).forEach(field => { // {1}
            const control = this.form.get(field);            // {2}
            control.markAsTouched({ onlySelf: true });       // {3}
        });

        if (!this.form.valid) return;
        this.save();
    }


    // Overwrite this
    abstract save(): void;


    public findField(fieldId: string, formFields: FormlyFieldConfig[]): FormlyFieldConfig {
        let field = null;
        formFields.forEach(item => {

            let keyParts = [];
            if (item.key) {
                keyParts = item.key.split('.');
            }

            if (item.fieldGroup && item.fieldGroup.length > 0) {
                if (!field) {
                    field = this.findField(fieldId, item.fieldGroup);
                }
            } else {
                if (!field && (item.key === fieldId || (keyParts.length && keyParts[keyParts.length - 1] === fieldId))) {
                    field = item;
                }
            }
        });
        return field;

    }

    public findFieldByLabel(label: string, formFields: FormlyFieldConfig[]): FormlyFieldConfig {

        return formFields.find(item => {
            return item.templateOptions.label === label;
        });

    }

    public disableForm(formFields: FormlyFieldConfig[]) {
        formFields.forEach(item => {
            if (item.templateOptions) {
                item.templateOptions.disabled = true;
            }
        });
    }

    public getFormKeys(formFields: FormlyFieldConfig[]): string[] {

        const fields = [];

        formFields.forEach(item => {
            if (item.fieldGroup && item.fieldGroup.length > 0) {
                fields.push(... this.getFormKeys(item.fieldGroup));
            } else {
                if (typeof item.key !== 'undefined') {
                    fields.push(item.key);
                }
            }

        });

        return fields;
    }

}


