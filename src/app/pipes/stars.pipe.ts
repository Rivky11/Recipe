import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class PipesPipe implements PipeTransform {
  stars:string=""

  transform(level: number) :unknown{

    for(let i = 0; i<level;i++)
    {
      this.stars+="🟨"

    }


    return this.stars;

}
}




