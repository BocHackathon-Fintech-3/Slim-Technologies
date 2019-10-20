import {Component, Input, OnInit} from '@angular/core';
import {ToastaService} from 'ngx-toasta';

export class VerificationDocument {
  title: string;
  icon: string;
  description: string;
  status: 'approved' | 'pending';


  constructor(data: Partial<VerificationDocument> = {}) {
    Object.assign(this, data);
  }
}


@Component({
  selector: 'app-verification-document',
  templateUrl: './verification-document.component.html',
  styleUrls: ['./verification-document.component.scss']
})
export class VerificationDocumentComponent implements OnInit {
  @Input()
  mode = 'edit';

  @Input()
  document: VerificationDocument = new VerificationDocument();

  uploadProgress = 0;

  constructor(private toastService: ToastaService) {
  }

  ngOnInit() {
  }

  fileChangeEvent() {

    const interval = setInterval(() => {
      this.uploadProgress += 5;
      if (this.uploadProgress === 100) {
        clearInterval(interval);
        this.uploadProgress = 0;

        this.toastService.success({
          title: 'Document',
          msg: 'Your document has been successfully uploaded!'
        });
      }
    }, 100);

  }
}
