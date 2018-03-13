import {
  Component,
  ViewChild,
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Tab01Component } from './tabs/tab01.component';
import { Tab02Component } from './tabs/tab02.component';

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
  templateUrl: './app.component.html'
})
export class AppComponent {
  tab01 = Tab01Component
  tab02 = Tab02Component
  tab03 = PageComponent 

  constructor() { }
}
