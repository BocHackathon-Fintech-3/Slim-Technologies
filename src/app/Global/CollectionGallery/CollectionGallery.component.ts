import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'embryo-CollectionGallery',
    templateUrl: './CollectionGallery.component.html',
    styleUrls: ['./CollectionGallery.component.scss']
})
export class CollectionGalleryComponent {

    items = [
        { title: 'General <br> Insurance', image: '/assets/media/General.jpg', link: '/quotes/request' },
        { title: 'Property <br> Insurance', image: '/assets/media/Property.jpg', link: '/quotes/request' },
        { title: 'Marine <br> Insurance', image: '/assets/media/Marine.jpg', link: '/quotes/request' },
        { title: 'Fire <br> Insurance', image: '/assets/media/Fire.jpg', link: '/quotes/request' },
        { title: 'Liability  <br> Insurance', image: '/assets/media/Liability.jpg', link: '/quotes/request' },
        { title: 'Social <br> Insurance', image: '/assets/media/Social.jpg', link: '/quotes/request' },
    ];

}
