import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IKeyValue } from './modellistkeys';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-list-key-values',
  templateUrl: './list-key-values.component.html',
  styleUrls: ['./list-key-values.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListKeyValuesComponent extends BaseComponent implements OnInit {
  @Input()
  keyValues:IKeyValue[];

  constructor() {
    super()
   }

  ngOnInit() {
  }

}
