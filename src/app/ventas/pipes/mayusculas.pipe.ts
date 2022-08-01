import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {


    transform(value: string, mayusculas:boolean = true):string {
        if (mayusculas) {
            return value.toUpperCase();
        } else {
            return value.toLowerCase();
        }

    }   
}