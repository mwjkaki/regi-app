import { BrowserModule } from '@angular/platform-browser';
import { OnsenModule, NgModule, CUSTOM_ELEMENTS_SCHEMA , LOCALE_ID } from 'ngx-onsenui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent, PageComponent } from './app.component';
import { NumberInputDirective } from './directives/number-input.directive';
import { NumberInputPipe } from './pipes/number-input.pipe';
import { GoodsService } from './services/goods.service';
import { Tab01Component } from './tabs/tab01.component';
import { Tab02Component } from './tabs/tab02.component';

import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
registerLocaleData(localeJa);

@NgModule({
  declarations: [
    AppComponent,
    NumberInputDirective,
    NumberInputPipe,
    Tab01Component,
    Tab02Component,
    PageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    OnsenModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: "ja-JP" },NumberInputPipe,GoodsService],
  bootstrap: [AppComponent],
  entryComponents: [Tab01Component,Tab02Component,PageComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
