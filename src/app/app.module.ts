import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModelsComponent } from './models/models.component';
import { ViewsComponent } from './views/views.component';
import { ControlersComponent } from './controlers/controlers.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelsComponent,
    ViewsComponent,
    ControlersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
