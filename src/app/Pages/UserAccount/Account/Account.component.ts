import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-Account',
    templateUrl: './Account.component.html',
    styleUrls: ['./Account.component.scss']
})
export class AccountComponent implements OnInit {


    showImageUpload: boolean = false;
    showImageActions: boolean = false;
    uploadedPercentage = 0;


    constructor() {
    }

    ngOnInit() {
    }

    enter(e) {
        this.showImageActions = true;
    }

    leave(e) {
        this.showImageActions = false;
    }


    fileChanged(files: FileList) {


        if (files.length) {

            // this.profileService.uploadProfileImage(files.item(0)).subscribe(response => {
            //     switch (response.type) {
            //         case HttpEventType.Sent:
            //
            //             // Start
            //             break;
            //         case HttpEventType.Response:
            //
            //             this.loadProfile();
            //             this.uploadedPercentage = 0;
            //             this.actionService.requestUpdate(UserProfile);
            //
            //             break;
            //         case 1: {
            //
            //         }
            //             if (Math.round(this.uploadedPercentage) !== Math.round(event['loaded'] / event['total'] * 100)) {
            //                 this.uploadedPercentage = event['loaded'] / event['total'] * 100;
            //
            //                 this.uploadedPercentage = Math.round(this.uploadedPercentage);
            //             }
            //             break;
            //     }
            //
            // });
        }

    }

}
