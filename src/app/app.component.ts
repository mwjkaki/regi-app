import {
  Component,
  ViewChild,
} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'ons-page',
  template: `
    <ons-toolbar>
      <div class="center">Page</div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content" id="initial-page">
      <div style="text-align: center; margin: 10px">
        <p>Home</p>

        <button (click)="inc()">click! {{i}}</button>
      </div>
    </div>
  `
})
export class HomeComponent {
  i: number = 0;

  constructor() {
  }

  inc() {
    this.i++;
  }
}

@Component({
  selector: 'ons-page',
  template: `
    <ons-toolbar>
      <div class="center">Page</div>
    </ons-toolbar>
    <div class="background"></div>
    <div class="content" class="normal-page">
      <div style="text-align: center; margin: 10px">
        <p>Page</p>
      </div>
    </div>
  `
})
export class PageComponent {
}

@Component({
  selector: 'app-root',
  template: `
  <ons-tabbar swipeable animation="none">
    <div class="tabbar__content"></div>
    <div class="tabbar">
      <ons-tab label="Page1" icon="ion-home" [page]="home" active></ons-tab>
      <ons-tab label="Page2" icon="ion-help" [page]="page"></ons-tab>
      <ons-tab label="Page3" icon="ion-stop" [page]="page"></ons-tab>
    </div>
  </ons-tabbar>
  `
})
export class AppComponent {
  home = HomeComponent
  page = PageComponent

  constructor() { }
}
