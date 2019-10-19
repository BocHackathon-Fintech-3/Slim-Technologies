import {Component, OnInit} from '@angular/core';
import {VerificationDocument} from './verification-document/verification-document.component';

@Component({
  selector: 'app-verification-documents',
  templateUrl: './verification-documents.component.html',
  styleUrls: ['./verification-documents.component.scss']
})
export class VerificationDocumentsComponent implements OnInit {

  documents: VerificationDocument[] = [


    new VerificationDocument({
      title: 'ID - Front',
      description: ' Upload your Identity Card Front',
      status: 'approved',
      icon: 'perm_identity'
    }),

    new VerificationDocument({
      title: 'ID - Back',
      description: ' Upload your Identity Card Back',
      status: 'approved',
      icon: 'perm_identity'
    }),

    new VerificationDocument({
      title: 'Proof of address',
      description: 'Upload a utility bill',
      status: 'approved',
      icon: 'map'
    }),

    new VerificationDocument({
      title: 'Selfie (or Photo of you)',
      description: 'Upload a photo of you',
      status: 'approved',
      icon: 'assignment_ind'
    })

  ];

  constructor() {
  }

  ngOnInit() {
  }

}
