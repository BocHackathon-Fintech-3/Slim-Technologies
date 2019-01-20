import { Component, OnInit } from '@angular/core';
import { MY_PLANS } from '../../../data/plans';

@Component({
    selector: 'app-my-plans',
    templateUrl: './my-plans.component.html',
    styleUrls: ['./my-plans.component.scss']
})
export class MyPlansComponent implements OnInit {

    plans = MY_PLANS;

    constructor() {
    }

    ngOnInit() {
    }

}
