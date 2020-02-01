import { Component, OnInit } from '@angular/core';
import { IKeyValue, ConversionVal } from 'src/app/shared/components/list-key-values/modellistkeys';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  get keyValues():IKeyValue[]{
    return [
      {key:'keya',value:'value1'},
      {key:'keyb',value:'valueb'},
      {key:'keyc',value:'valuec'},
      {key:'keyd',value:'valued'}
    ]  
  }

  get keyValuesConv():IKeyValue[]{
    return [
      {key:'keya',value:new Date(),type: ConversionVal.DATE},
      {key:'keyb',value:8987,type: ConversionVal.NUMBER},
      {key:'keyc',value:777777,type: ConversionVal.NUMBER_DEC},
      {key:'keyd',value:'valued'}
    ]  
  }
}
