import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  numbersOdd: number[] = [];
  numbersEven: number[] = [];
  title = "app";
  doSomething(event: number) {
    if (event % 2 === 0) {
      this.numbersEven.push(event);
    } else {
      this.numbersOdd.push(event);
    }
  }
}
