import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-quote-offer-item',
    templateUrl: './quote-offer-item.component.html',
    styleUrls: ['./quote-offer-item.component.scss']
})
export class QuoteOfferItemComponent implements OnInit {

    @Input()
    offer: {
        image,
        match,
        name,
        product,
        price,
        benefit,
        premium,
        security,
        easeOfuse,
        customerSatisfaction,
        total,
        whoProvidesInsurance,
        duration,
        makingClaim,
        whatIfiWantToCancel,
        administrationDetails
        status
    };


    showDetails = false;


    get color() {
        if (this.offer.total > 80) {
            return 'green';
        } else if (this.offer.total > 60) {
            return 'yellow';
        } else {
            return 'red';
        }
    }

    constructor() {
    }

    ngOnInit() {
    }


}
