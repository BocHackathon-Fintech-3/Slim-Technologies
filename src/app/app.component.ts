import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(translate: TranslateService, private router: Router) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        translate.use('en');
        // const browserLang: string = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }


}
