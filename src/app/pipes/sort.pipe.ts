import { User } from './../models/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: any, args?: any): any {
      array.sort((a: any, b: any) => {
      if (a[args] > b[args]) {
        return -1;
      } else if (a[args] < b[args]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
