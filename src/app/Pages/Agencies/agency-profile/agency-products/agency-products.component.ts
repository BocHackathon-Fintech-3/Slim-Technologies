import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-agency-products',
    templateUrl: './agency-products.component.html',
    styleUrls: ['./agency-products.component.scss']
})
export class AgencyProductsComponent implements OnInit {

    products = [

        {
            title: 'Latest Collections',
            subTitle: 'Save Upto 40%',
            link: 'Latest Collections',
            image: 'assets/images/collection.jpg'

        },


        {
            title: 'Latest Collections',
            subTitle: 'Save Upto 40%',
            link: 'Latest Collections',
            image: 'assets/images/collection.jpg'

        },

        {
            title: 'Latest Collections',
            subTitle: 'Save Upto 40%',
            link: 'Latest Collections',
            image: 'assets/images/collection.jpg'

        },
        {
            title: 'Latest Collections',
            subTitle: 'Save Upto 40%',
            link: 'Latest Collections',
            image: 'assets/images/collection.jpg'

        },


        {
            title: 'Latest Collections',
            subTitle: 'Save Upto 40%',
            link: 'Latest Collections',
            image: 'assets/images/collection.jpg'

        },

        {
            title: 'Latest Collections',
            subTitle: 'Save Upto 40%',
            link: 'Latest Collections',
            image: 'assets/images/collection.jpg'

        },


    ];

    constructor() {
    }

    ngOnInit() {
    }

}
