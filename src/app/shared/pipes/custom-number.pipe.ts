import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "customNumber" })
export class CustomNumberPipe implements PipeTransform {
  transform(value: number): string {
    const stringValue = value.toString();
    const length = stringValue.length;
    if (length === 1) {
      return "0.0" + stringValue;
    } else {
      return (
        stringValue.slice(0, length - 1) + "." + stringValue.slice(length - 1)
      );
    }
  }
}
