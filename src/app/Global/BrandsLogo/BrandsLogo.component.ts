import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { EmbryoService } from '../../Services/Embryo.service';

@Component({
    selector: 'embryo-BrandsLogo',
    templateUrl: './BrandsLogo.component.html',
    styleUrls: ['./BrandsLogo.component.scss']
})
export class BrandslogoComponent implements OnInit, OnChanges {

    @Input() isRTL: any;

    slideConfig: any;

    brandsLogoArray: any = [
        {
            id: 1,
            image: 'assets/hackathon/Parters/Atokes.jpg'
        },
        {
            id: 2,
            image: 'assets/hackathon/Parters/boc.jpg'
        },
        {
            id: 3,
            image: 'assets/hackathon/Parters/Epic.jpg'
        }, {
            id: 4,
            image: 'assets/hackathon/Parters/Eurobank.jpg'
        },
        {
            id: 5,
            image: 'assets/hackathon/Parters/Public.jpg'
        },
        {
            id: 6,
            image: 'assets/hackathon/Parters/Untitled-2.jpg'
        },


    ];

    constructor(public embryoService: EmbryoService) {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.slideConfig = {
            infinite: true,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            rtl: this.isRTL,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                }
            ]
        };
    }


}
