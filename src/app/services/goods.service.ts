import { Injectable } from '@angular/core';

export class Goods {
  gcode: string;
  price: number;
  stock: number;
}

@Injectable()
export class GoodsService {
  public goods: Goods[]= [
  {
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
  resetGoods() : void { this.goods = new Array(); }
  getGoods(){ return this.goods; }
  addGoods(pgoods:Goods) : void { this.goods.push(pgoods); }
}
