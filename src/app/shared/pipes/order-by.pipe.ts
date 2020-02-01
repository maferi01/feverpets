import { Pipe, PipeTransform } from '@angular/core';
/**
 * Pipe to get one list ordered by field-type, it could use lodash api for complex
 */
@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], order = '', column: string = ''): any[] {
    if (!value || order === '' || !order) { return value; } // no array
    if (value.length <= 1) { return value; } // array with only one item
    return this.orderBy(value, column, order);
  }
  
  /**
   * Order function based on sort array .
   * @param list 
   * @param column 
   * @param order 
   */
  orderBy(list: any[], column: string, order: string): any[] {
   
  const ascFn=(a,b)=>a[column] > b[column]?1:-1;
  const descFn=(a,b)=>a[column] < b[column]?1:-1;
     
  return list.sort(order==='asc'?ascFn:descFn)
  }
  
  
  
  
}
