import { Component, OnInit } from '@angular/core';

export class List {
  gds: string;
  prc: number;
  cnt: number;
  sum: number;
}


@Component({
  selector: 'ons-page',
  templateUrl: './tab02.component.html'
})
export class Tab02Component implements OnInit {
　public items: List[]= [{
    gds: "テスト",
    prc: 1000,
    cnt: 1,
    sum: 1000,
  }];
  constructor() { }

  ngOnInit() {
  }

}
