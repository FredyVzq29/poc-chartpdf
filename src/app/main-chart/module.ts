import { NgModule } from '@angular/core';
import { MainChartComponent } from './main-chart.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    MainChartComponent,
  ],
  imports: [
    NgChartsModule
  ],
  providers: [],
  exports: [MainChartComponent],
})
export class MainChartComponentModule { }
