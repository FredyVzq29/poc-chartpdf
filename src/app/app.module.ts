import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainChartComponentModule } from './main-chart/module';
import { PdfMakeComponentModule } from './pdf-make/module';
import { PdfGeneratorSelectorComponenttModule } from './pdf-generator-selector/module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfGeneratorSelectorComponenttModule,
    MainChartComponentModule,
    PdfMakeComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
