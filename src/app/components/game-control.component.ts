import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: "app-gamecontrol",
  templateUrl: "./game-control.component.html"
})
export class GameControl {
  lastNumber: number = 0;
  interval;
  @Output() numberIncrement = new EventEmitter<number>();
  constructor() {}

  startGame() {
    this.interval = setInterval(() => {
      this.numberIncrement.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
  stopGame() {
    clearInterval(this.interval);
  }
}
