import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-layout-router-inside',
  templateUrl: './layout-router-inside.component.html',
  styleUrls: ['./layout-router-inside.component.scss']
})
export class LayoutRouterInsideComponent implements OnInit, AfterViewInit {

  asideLeftShow = false;
  asideRightShow = false;
  @ViewChild('asideright',{static:true}) refAsideRight: TemplateRef<any>;
  @ViewChild('asideleft',{static:true}) refAsideLeft: TemplateRef<any>;

  constructor(private det: ChangeDetectorRef) { }

  ngOnInit() {
  }

  activAsideLeft($event) {
    this.asideLeftShow = true;
    this.det.detectChanges();
    console.log('actived aside left********');
  }
  ngAfterViewInit(): void {
  }
  activAsideRight($event) {
    this.asideRightShow = true;
    this.det.detectChanges();
    console.log('actived aside right********');
  }
  deactivAsideRight($event) {
    this.asideRightShow = false;
    console.log('de-actived aside right********');
  }
}

