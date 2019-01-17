import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'embryo-HomePageThreeSlider',
    templateUrl: './HomePageThreeSlider.component.html',
    styleUrls: ['./HomePageThreeSlider.component.scss']
})
export class HomePageThreeSliderComponent implements OnInit, OnChanges {

    @Input() isRTL: boolean = false;

    slideConfig: any;

    slides: any = [
        {
            img: 'assets/media/homepageslide.jpg',
            // content: '2018 Latest Collection',
            // heading_one: 'New Fashion Collection',

        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.slideConfig = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            rtl: this.isRTL,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }
                }
            ]
        };
    }

}
