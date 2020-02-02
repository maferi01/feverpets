import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
/**
 * Base class for all components,
 */
export abstract class BaseComponent implements OnDestroy{
    // set here common items of component
    protected subs: Subscription[]=[];

    constructor(protected errorServ:ErrorService){

    }

    ngOnDestroy(): void {
        this.subs.forEach(s=>s.unsubscribe());
    }

    controlError(er: Error): void {
        console.error('error calling',er);
        this.errorServ.sendError(er);
      }
}

