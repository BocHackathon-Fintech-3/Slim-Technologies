import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export abstract class BaseComponent implements OnDestroy {

    loading = false;
    private subscriptions: Subscription[] = [];

    set subscription(subscription: Subscription) {
        this.addSubscription(subscription);
    }

    ngOnDestroy(): void {
        this.removeSubscriptions();
    }

    addSubscription(sub: Subscription) {
        this.subscriptions.push(sub);
    }

    setLoading(loading: boolean) {
        this.loading = loading;
    }

    protected removeSubscriptions() {
        this.subscriptions.forEach(item => {
            item.unsubscribe();
        });
    }

}
