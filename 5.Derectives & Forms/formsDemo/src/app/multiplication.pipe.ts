import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'multiply'
})
export class MultiplicationPipe implements PipeTransform{
    transform(value: number, times: string){
        let timesAsFloat = parseFloat(times);
        const timesNumber = isNaN(timesAsFloat)? 1 : timesAsFloat;

        return value * timesNumber;
    }
}