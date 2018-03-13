import { Component } from '@angular/core';

@Component({
  selector: 'ons-page',
  templateUrl: './tab01.component.html',
  styles:[`p {
  　　　　　white-space: pre-wrap;
　　　　　}`]
})
export class Tab01Component {
  public readText: string = null;
  onChangeInput(evt) {
    const file = evt.target.files[0];
    this.fileToText(file)
      .then(text => {
        this.readText = text;
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
