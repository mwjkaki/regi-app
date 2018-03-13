import { BrowserModule } from '@angular/platform-browser';
import { OnsenModule, NgModule, CUSTOM_ELEMENTS_SCHEMA } from 'ngx-onsenui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent, PageComponent } from './app.component';
import { Tab01Component } from './tabs/tab01.component';
@NgModule({
  declarations: [
    AppComponent,
    Tab01Component,
    PageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    OnsenModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [Tab01Component, PageComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
