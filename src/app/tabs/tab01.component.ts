import { Component, Input } from '@angular/core';
import { Goods,GoodsService } from '../services/goods.service';

@Component({
  selector: 'ons-page',
  templateUrl: './tab01.component.html',
  styles:[`p {
    white-space: pre-wrap;
  }`]
})
export class Tab01Component {

  public readText: string = null;
  public radi:string = 'rad03';
  constructor(public goodsservice: GoodsService) { }
  onChangeInput(evt) {
    const file = evt.target.files[0];
    this.fileToText(file)
    .then(text => {
      var splitted: string[] = text.split(',');
      this.goodsservice.resetGoods();
      var adBtn: Goods;
      for ( var i=140;i<Object.keys(splitted).length-1;i=i+5 ){
        adBtn = { gcode:splitted[i],price:+splitted[i+1],stock:+splitted[i+2] };
        this.goodsservice.addGoods(adBtn);
      }
      // this.tab02Component.goods = new Array();
      // var adBtn: this.tab02Component.Butn;
      // for ( var i=140;i<Object.keys(splitted).length;i+5 ){
      //   adBtn = { gcode:splitted[i],price:+splitted[i+1],stock:+splitted[i+2] };
      //   this.tab02Component.goods.push(adBtn);
      // }
    })
    .catch(err => console.log(err));
  }
  fileToText(file): Promise<string> {
    const reader = new FileReader();
    reader.readAsText(file,'shift-jis');
    return new Promise((resolve, reject) => {
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = () => {
        reject(reader.error);
      };
    });
  }


}
