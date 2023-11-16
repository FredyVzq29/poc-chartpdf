import { NgModule } from '@angular/core';
import { MainChartComponent } from './main-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { JSPDFRoutingModule } from './routing';

@NgModule({
  declarations: [MainChartComponent],
  imports: [NgChartsModule, JSPDFRoutingModule],
  providers: [],
  exports: [],
})
export class MainChartComponentModule {}
