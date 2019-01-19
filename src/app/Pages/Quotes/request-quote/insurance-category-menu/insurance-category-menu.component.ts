import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-insurance-category-menu',
    templateUrl: './insurance-category-menu.component.html',
    styleUrls: ['./insurance-category-menu.component.scss']
})
export class InsuranceCategoryMenuComponent implements OnInit {


    items = [

        {
            name: 'Motor Insurance',
            icon: 'https://www.pitsasinsurances.com/img/products-img/vehicle-color.svg',
            link: 'sdfdsf'

        },
        {
            name: 'Medical Insurance',
            icon: 'https://www.pitsasinsurances.com/img/products-img/vehicle-color.svg',
            link: 'sdfdsf'

        },
        {
            name: 'Property Insurance',
            icon: 'https://www.pitsasinsurances.com/img/products-img/vehicle-color.svg',
            link: 'sdfdsf'

        },
        {
            name: 'Life Insurance',
            icon: 'https://www.pitsasinsurances.com/img/products-img/vehicle-color.svg',
            link: 'sdfdsf'

        },
        {
            name: 'Travel Insurance',
            icon: 'https://www.pitsasinsurances.com/img/products-img/vehicle-color.svg',
            link: 'sdfdsf'
        },
        {
            name: 'Group Insurance',
            icon: 'https://www.pitsasinsurances.com/img/products-img/vehicle-color.svg',
            link: 'sdfdsf'
        }


    ];

    constructor() {
    }

    ngOnInit() {
    }

}
