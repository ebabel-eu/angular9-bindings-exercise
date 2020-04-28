import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  randomNumber: number;
  @Output() numberUpdated = new EventEmitter<number>();
  timerId: number = null;
  speed: number = 1000;

  constructor() { }

  ngOnInit(): void {
  }

  private randomiseNumber(): void {
    this.randomNumber = Math.floor(Math.random() * 999);
    this.numberUpdated.emit(this.randomNumber);
  }

  startGame() {
    this.randomiseNumber();
    this.timerId = window.setInterval(() => {
      this.randomiseNumber();
    }, this.speed);
  }

  stopGame() {
    clearInterval(this.timerId);
  }
}
