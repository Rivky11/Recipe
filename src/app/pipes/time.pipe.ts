import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'rxjs';

@Pipe({
  name: 'time'
})
export class DatePipe implements PipeTransform {

  transform(minutes: number):unknown {
    return `${(minutes/60).toFixed(0)} : ${minutes%60 <10?'0'+minutes%60: minutes%60}`;
  }

}
