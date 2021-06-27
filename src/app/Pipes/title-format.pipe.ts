import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleFormat'
})
export class TitleFormatPipe implements PipeTransform {

  data:string;

  transform(value: string, length: number): string {
    this.data = value;
    if(this.data.length>length){
      this.data = this.data.substring(0,length)+'..';
      return this.data;
    }
    else{
      return this.data;
    }
  }

}
