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
            image: 'assets/media/companies/alianz.png'
        },
        {
            id: 2,
            image: 'assets/media/companies/anytime.png'
        },
        {
            id: 3,
            image: 'assets/media/companies/cyprilife.png'
        },
        {
            id: 4,
            image: 'assets/media/companies/eurolife.png'
        },
        {
            id: 5,
            image: 'assets/media/companies/gandirect.png'
        },
        {
            id: 6,
            image: 'assets/media/companies/gap.png'
        },
        {
            id: 7,
            image: 'assets/media/companies/genikes.png'
        },
        {
            id: 8,
            image: 'assets/media/companies/metlif.png'
        },
        {
            id: 9,
            image: 'assets/media/companies/royalcrown.png'
        },
        {
            id: 10,
            image: 'assets/media/companies/universal.png'
        },
        {
            id: 11,
            image: 'assets/media/companies/ydra.png'
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
            slidesToScroll: 2,
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
