import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-quote-request-item',
    templateUrl: './quote-request-item.component.html',
    styleUrls: ['./quote-request-item.component.scss']
})
export class QuoteRequestItemComponent implements OnInit {

    @Input()
    request: { type, icon, offers, date };


    constructor() {
    }

    ngOnInit() {
    }

}
