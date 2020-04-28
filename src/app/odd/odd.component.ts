import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() numberUpdated: number;

  constructor() { }

  ngOnInit(): void {
  }

  onNumberUpdated($event: number) {
    console.log($event);
  }
}
