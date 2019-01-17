import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-agency-offers',
    templateUrl: './agency-offers.component.html',
    styleUrls: ['./agency-offers.component.scss']
})
export class AgencyOffersComponent implements OnInit {

    offers = [

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
