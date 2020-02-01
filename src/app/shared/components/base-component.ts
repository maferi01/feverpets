import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
/**
 * Base class for all components,
 */
export abstract class BaseComponent implements OnDestroy{
    // set here common items of component
    protected subs: Subscription[]=[];

    ngOnDestroy(): void {
        this.subs.forEach(s=>s.unsubscribe());
    }

}

