import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-insurance-category-menu',
    templateUrl: './insurance-category-menu.component.html',
    styleUrls: ['./insurance-category-menu.component.scss']
})
export class InsuranceCategoryMenuComponent implements OnInit {


    items = [

        {
            name: 'Car Insurance',
            icon: 'car',
            link: 'sdfdsf'

        },
        {
            name: 'Travel Insurance',
            icon: 'plane',
            link: 'sdfdsf'

        },
        {
            name: 'Property Insurance',
            icon: 'home',
            link: 'sdfdsf'

        },
        {
            name: 'Employee Insurance',
            icon: 'user',
            link: 'sdfdsf'

        },
        {
            name: 'Office Insurance',
            icon: 'briefcase',
            link: 'sdfdsf'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
