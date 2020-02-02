import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { BaseComponent } from 'src/app/shared/components/base-component';
/**
 * This component manages the main layout of this app, header-body-footer
 */
@Component({
  selector: 'app-layout-router',
  templateUrl: './layout-router.component.html',
  styleUrls: ['./layout-router.component.scss']
})
export class LayoutRouterComponent extends BaseComponent implements OnInit {
  error:any;

  constructor(errorServ:ErrorService) {super(errorServ); }

  ngOnInit() {
    const sub=this.errorServ.getErrorObs().subscribe(er=>this.error=er);
    this.subs.push(sub);
  }

}
