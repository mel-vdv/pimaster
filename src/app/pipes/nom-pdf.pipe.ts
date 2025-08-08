import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomPdf'
})
export class NomPdfPipe implements PipeTransform {

  transform(value: string): string {
    return value!.split('/')!.pop()!;
  }

}
