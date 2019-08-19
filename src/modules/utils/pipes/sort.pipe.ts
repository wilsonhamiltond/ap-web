import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {

  transform(value: any[], column: string, order:string = 'asc'): any[] {
    if (!value || !column || column === '' ) { return value; }
    if (value.length <= 1) { return value; }
    let new_value = value.sort( ( first:any, next:any) =>{
        if(first[column] < next[column])
            return order == 'asc'? 1 : -1;
        else
          return order == 'asc'? -1 : 1;
    });
    return new_value;
  }
}