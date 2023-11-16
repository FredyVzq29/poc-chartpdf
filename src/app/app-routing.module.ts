import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //component: PdfGeneratorSelectorComponent,
    loadChildren: () =>
      import('./pdf-generator-selector/module').then(
        (module) => module.PdfGeneratorSelectorComponenttModule
      ),
  },
  {
    path: 'pdf-make',
    //component: PdfGeneratorSelectorComponent,
    loadChildren: () =>
      import('./pdf-make/module').then(
        (module) => module.PdfMakeComponentModule
      ),
  },
  {
    path: 'js-pdf',
    //component: PdfGeneratorSelectorComponent,
    loadChildren: () =>
      import('./main-chart/module').then(
        (module) => module.MainChartComponentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
