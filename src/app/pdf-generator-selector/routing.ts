import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfGeneratorSelectorComponent } from './pdf-generator-selector.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PdfGeneratorSelectorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class GeneratorRoutingModule {}
