import { Pipe, PipeTransform } from '@angular/core';
import { orderBy,sortBy } from 'lodash';
/**
 * Pipe to get one list ordered by field-type, it uses lodash api
 */
@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], order = '', column: string = ''): any[] {
    if (!value || order === '' || !order) { return value; } // no array
    if (!column || column === '') { return sortBy(value); } // sort 1d array
    if (value.length <= 1) { return value; } // array with only one item
    return orderBy(value, [column], [order]);
  }
}
