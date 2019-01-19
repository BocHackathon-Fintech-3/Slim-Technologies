import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-agency-item',
    templateUrl: './agency-item.component.html',
    styleUrls: ['./agency-item.component.scss']
})
export class AgencyItemComponent implements OnInit {

    checked: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }


    clicked() {
        this.checked = !this.checked;

    }
}
