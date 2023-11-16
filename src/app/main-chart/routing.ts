import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainChartComponent } from './main-chart.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MainChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class JSPDFRoutingModule {}
