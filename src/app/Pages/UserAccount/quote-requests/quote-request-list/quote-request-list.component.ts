import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-quote-request-list',
    templateUrl: './quote-request-list.component.html',
    styleUrls: ['./quote-request-list.component.scss']
})
export class QuoteRequestListComponent implements OnInit {


    items = [
        {
            type: 'Car Insurance',
            icon: 'https://www.pitsasinsurances.com/img/products-img/vehicle-color.svg',
            offers: '12',
            date: new Date()
        },
        {
            type: 'Medical Insurance',
            icon: 'https://www.pitsasinsurances.com/img/products-img/medical-color.svg',
            offers: '9',
            date: new Date()
        },
        {
            type: 'Travel Insurance',
            icon: 'https://www.pitsasinsurances.com/img/products-img/travel-color.svg',
            offers: '6',
            date: new Date()
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
