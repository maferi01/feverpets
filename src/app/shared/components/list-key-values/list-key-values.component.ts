import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IKeyValue } from './modellistkeys';

@Component({
  selector: 'app-list-key-values',
  templateUrl: './list-key-values.component.html',
  styleUrls: ['./list-key-values.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListKeyValuesComponent implements OnInit {
  @Input()
  keyValues:IKeyValue[];

  constructor() { }

  ngOnInit() {
  }

}
