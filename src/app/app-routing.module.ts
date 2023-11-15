import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainChartComponent } from './main-chart/main-chart.component';

const routes: Routes = [
  {
    path:'',
    component: MainChartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
