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
            icon: 'car',
            offers: '12',
            date: new Date()
        },
        {
            type: 'Property Insurance',
            icon: 'home',
            offers: '9',
            date: new Date()
        },
        {
            type: 'Travel Insurance',
            icon: 'plane',
            offers: '6',
            date: new Date()
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
