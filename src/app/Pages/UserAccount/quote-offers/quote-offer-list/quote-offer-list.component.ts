import { Component, OnInit } from '@angular/core';
import { OFFERS } from '../../../../data/offers';

@Component({
    selector: 'app-quote-offer-list',
    templateUrl: './quote-offer-list.component.html',
    styleUrls: ['./quote-offer-list.component.scss']
})
export class QuoteOfferListComponent implements OnInit {

    offers = OFFERS;


    constructor() {
    }

    ngOnInit() {
    }

}
