import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from '../../../Lib/forms/base-form-component.class';
import {ToastaService} from 'ngx-toasta';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent extends BaseFormComponent {

  model = {
    firstname: 'Thomas',
    lastName: 'Stavrou',
    birthday: new Date(),
    phone: '97750323',
    email: 'thomas@gmail.com',
    occupation: 'Business, consulting and management',
    city: 'Nicosia',
    address: 'Tseriou 71, Lakatamia',
  };

  constructor(private toastService: ToastaService) {
    super();
    this.setupFormFields();
  }


  save(): void {
    this.saving = true;
    setTimeout(() => {
      this.saving = false;
      this.toastService.success({
        title: 'Personal Details',
        msg: 'Your personal details updated successfully!'
      });

    }, 1000);
  }

  private setupFormFields(): void {
    this.formFields = [
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
            key: 'occupation',
            type: 'select',
            className: 'col-md-6',
            templateOptions: {
              label: 'Occupation',
              required: true,
              options: [
                'Accountancy, banking and finance',
                'Business, consulting and management',
                'Charity and voluntary work',
                'Creative arts and design',
                'Energy and utilities',
                'Engineering and manufacturing',
                'Environment and agriculture',
                'Healthcare'
              ].map(item => {
                return {'value': item, 'label': item};
              })
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
                return {'value': item, 'label': item};
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
          }
        ],
      }

    ];
  }

}
