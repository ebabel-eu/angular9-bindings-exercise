import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  randomNumber: number;
  @Output() numberUpdated = new EventEmitter<number>();
  timerId: NodeJS.Timeout = null;
  speed: number = 1000;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.randomNumber = Math.floor(Math.random() * 999);
    this.numberUpdated.emit(this.randomNumber);  

    this.timerId = setInterval(() => {
      this.randomNumber = Math.floor(Math.random() * 999);
      this.numberUpdated.emit(this.randomNumber);  
    }, this.speed);
  }

  stopGame() {
    clearInterval(this.timerId);
  }
}
