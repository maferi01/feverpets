import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

export abstract class BaseComponent implements OnDestroy{
    
    protected subs: Subscription[]=[];

    ngOnDestroy(): void {
        this.subs.forEach(s=>s.unsubscribe());
    }

}

