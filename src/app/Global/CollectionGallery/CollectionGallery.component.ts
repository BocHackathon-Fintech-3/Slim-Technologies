import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'embryo-CollectionGallery',
    templateUrl: './CollectionGallery.component.html',
    styleUrls: ['./CollectionGallery.component.scss']
})
export class CollectionGalleryComponent {

    items = [
        { title: 'General <br> Insurance', image: '/assets/media/General.jpg' },
        { title: 'Property <br> Insurance', image: '/assets/media/Property.jpg' },
        { title: 'Marine <br> Insurance', image: '/assets/media/Marine.jpg' },
        { title: 'Fire <br> Insurance', image: '/assets/media/Fire.jpg' },
        { title: 'Liability  <br> Insurance', image: '/assets/media/Liability.jpg' },
        { title: 'Social <br> Insurance', image: '/assets/media/Social.jpg' },
    ];

}
