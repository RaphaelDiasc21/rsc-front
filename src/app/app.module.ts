import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { ControlsComponent } from './map/controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJV0Yo8mOyvQAP8Ebd0FAs37k98frfQDA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
