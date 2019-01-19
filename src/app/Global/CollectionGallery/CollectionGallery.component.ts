import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'embryo-CollectionGallery',
    templateUrl: './CollectionGallery.component.html',
    styleUrls: ['./CollectionGallery.component.scss']
})
export class CollectionGalleryComponent {

    items = [
        { title: 'Car <br> Insurance', image: '/assets/media/car.jpg', link: '/quotes/request' },
        { title: 'Property <br> Insurance', image: '/assets/media/Property.jpg', link: '/quotes/request' },
        { title: 'Travel <br> Insurance', image: '/assets/media/travel.jpg', link: '/quotes/request' },
        { title: 'Fire <br> Insurance', image: '/assets/media/Fire.jpg', link: '/quotes/request' },
        { title: 'Office  <br> Insurance', image: '/assets/media/Liability.jpg', link: '/quotes/request' },
        { title: 'Employee <br> Insurance', image: '/assets/media/employee.jpg', link: '/quotes/request' },
    ];

}
