import { Component } from '@angular/core';

export class List {
  gds: string;
  prc: number;
  cnt: number;
  sum: number;
}
export class Butn {
  gcode: string;
  price: number;
  stock: number;
}

@Component({
  selector: 'ons-page',
  templateUrl: './tab02.component.html'
})
export class Tab02Component {
  public sum:number = 0;
  public azu:number = 0;
  public items: List[]= new Array();
  public goods: Butn[]= [{
    gcode: "テスト",
    price: 1000,
    stock: 10,
  },
  {
    gcode: "テスト2",
    price: 1111,
    stock: 20,
  }
  ,{
    gcode: "テスト3",
    price: 1300,
    stock: 10,
  }];

  constructor() { }

  addList(Gds :string, Prc :number) {
    var i:number = this.items.findIndex(k => k.gds==Gds)
    if  (i == -1) {
      var adGds:List = {gds:Gds,prc:Prc,cnt:1,sum:Prc};
      this.items.push(adGds);
      this.sum += Prc;
    } else {
      this.sum -= this.items[i].sum;
      this.items[i].cnt += 1;
      this.items[i].sum = this.items[i].prc * this.items[i].cnt;
      this.sum += this.items[i].sum;
    }

  }
  delList(i :number) {
    this.sum -= this.items[i].sum;
    this.items.splice(i,1);
  }
  updList(i :number) {
    this.sum -= this.items[i].sum;
    this.items[i].sum = this.items[i].prc * this.items[i].cnt;
    this.sum += this.items[i].sum;　　
  }
  clear() {
    this.sum = 0;
    this.azu = 0;
    this.items = new Array();　
  }
}
