export interface IKeyValue{
    key:string;
    value:any;
    type?: ConversionVal
}

export enum ConversionVal{
  NUMBER='NUMBER',
  NUMBER_DEC='NUMBER_DEC',
  DATE='DATE',
  NONE='NONE'    
}