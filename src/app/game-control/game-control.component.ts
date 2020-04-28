import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  randomNumber: number;
  timerId: number = null;
  speed: number = 1000;

  @Output() intervalFired = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  private randomiseNumber(): void {
    this.randomNumber = Math.floor(Math.random() * 999);

    if (this.randomNumber % 2 === 0) {
      this.evenNumbers.push(this.randomNumber);
    } else {
      this.oddNumbers.push(this.randomNumber);
    }

    this.intervalFired.emit(this.randomNumber);
  }

  onStartGame() {
    this.randomiseNumber();
    this.timerId = window.setInterval(() => {
      this.randomiseNumber();
    }, this.speed);
  }

  onStopGame() {
    clearInterval(this.timerId);
  }
}
