import { BrowserModule } from '@angular/platform-browser';
import { OnsenModule, NgModule, CUSTOM_ELEMENTS_SCHEMA } from 'ngx-onsenui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent, HomeComponent, PageComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
  entryComponents: [HomeComponent, PageComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
