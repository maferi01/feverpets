import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IKeyValue, ConversionVal } from './modellistkeys';
import { BaseComponent } from '../base-component';
import { ErrorService } from 'src/app/services/error.service';
/**
 * this shared component, shows a list of key-values, 
 * it is a Presentation-pure component , only depends on properties
 */
@Component({
  selector: 'app-list-key-values',
  templateUrl: './list-key-values.component.html',
  styleUrls: ['./list-key-values.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListKeyValuesComponent extends BaseComponent implements OnInit {
  @Input()
  keyValues:IKeyValue[];
  ConversionVal=ConversionVal;
  constructor( errorServ:ErrorService) {
    super(errorServ)
   }

  ngOnInit() {
  }

}
