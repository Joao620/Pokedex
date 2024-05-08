import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "zeroPrefix"
})
export class ZeroPrefixPipe implements PipeTransform {
  transform(value: number): string {
    return value.toString().padStart(3, "0");
  }
}
