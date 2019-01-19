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
            icon: 'https://www.pitsasinsurances.com/img/products-img/vehicle-color.svg',
            link: 'sdfdsf'

        },
        {
            name: 'Travel Insurance',
            icon: 'https://www.pitsasinsurances.com/img/products-img/vehicle-color.svg',
            link: 'sdfdsf'

        },
        {
            name: 'Property Insurance',
            icon: 'https://www.pitsasinsurances.com/img/products-img/vehicle-color.svg',
            link: 'sdfdsf'

        },
        {
            name: 'Employee Insurance',
            icon: 'https://www.pitsasinsurances.com/img/products-img/vehicle-color.svg',
            link: 'sdfdsf'

        },
        {
            name: 'Office Insurance',
            icon: 'https://www.pitsasinsurances.com/img/products-img/vehicle-color.svg',
            link: 'sdfdsf'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
