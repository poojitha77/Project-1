import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventSliderComponent } from './filter-slider/filter-slider.component';
import { DummyServiceService } from './dummy-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EventSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [DummyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
