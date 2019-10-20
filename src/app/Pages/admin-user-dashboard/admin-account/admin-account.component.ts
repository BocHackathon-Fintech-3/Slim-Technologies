import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.scss']
})
export class AdminAccountComponent implements OnInit {

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

  }


}
