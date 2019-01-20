import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-plan-item',
    templateUrl: './my-plan-item.component.html',
    styleUrls: ['./my-plan-item.component.scss']
})
export class MyPlanItemComponent implements OnInit {

    @Input()
    plan: {
        image,
        match,
        name,
        product,
        icon,
        price,
        benefit,
        premium,
        security,
        easeOfuse,
        customerSatisfaction,
        total,
        status,
        startDate,
        expiresDate,
        autoRenew,
        matchBenefits
    };

    showDetails = false;


    getColor(value: number): string {
        if (value >= 80) {
            return 'green';
        } else if (value >= 60) {
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
