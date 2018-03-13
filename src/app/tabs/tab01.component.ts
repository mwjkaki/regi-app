import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ons-page',
  templateUrl: './tab01.component.html',
  styleUrls: ['./tab01.component.css']
})
export class Tab01Component {
  i: number = 0;
  constructor() { }
  inc() {
    this.i++;
  }
}
