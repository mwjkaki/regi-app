import { BrowserModule } from '@angular/platform-browser';
import {
  Component,
  ViewChild,
  OnsTab,
  OnsenModule,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'ons-page',
  template: `
    <ons-toolbar>
    <div class="center">Tab 1</div>
  </ons-toolbar>
  <div class="background"></div>
  <div class="content" class="initial-page">
    <div style="text-align: center; margin: 10px">
      <p>This is the first page.</p>
    </div>
  </div>
  `
})

export class Tab1Component {
  constructor() {
  }
}


@Component({
  selector: 'ons-page',
  template: `
  <ons-toolbar>
    <div class="center">Tab 2</div>
  </ons-toolbar>
  <div class="background"></div>
  <div class="content" class="normal-page">
    <div style="text-align: center; margin: 10px">
      <p>This is the second page.</p>
    </div>
  </div>
`
})

class Tab2Component {
  constructor() {
  }
}

@Component({
  selector: 'ons-page',
  template: `
  <ons-toolbar>
    <div class="center">Tab 3</div>
  </ons-toolbar>
  <div class="background"></div>
  <div class="content" class="normal-page">
    <div style="text-align: center; margin: 10px">
      <p>This is the third page.</p>
    </div>
  </div>
`
})

class Tab3Component {
  constructor() {
  }
}

@Component({
  selector: 'app-root',
  template: `
  <ons-tabbar swipeable="true">
    <div class="tabbar__content"></div>
    <div class="tabbar">
      <ons-tab label="Page1" icon="ion-home" [page]="tab1" active></ons-tab>
      <ons-tab label="Page2" icon="ion-ios-browsers" [page]="tab2"></ons-tab>
      <ons-tab label="Page3" icon="ion-ios-search" [page]="tab3"></ons-tab>
    </div>
  </ons-tabbar>
`
})
export class AppComponent {
  tab1 = Tab1Component
  tab2 = Tab2Component
  tab3 = Tab3Component

  constructor() { }
}

@NgModule({
  declarations: [AppComponent, Tab1Component, Tab2Component, Tab3Component],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [Tab1Component, Tab2Component, Tab3Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

// export class AppComponent {
//     rootPage = Page1Component;
// }
