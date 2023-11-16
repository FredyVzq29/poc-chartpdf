import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfMakeComponent } from './pdf-make.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PdfMakeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class PDFMakeRoutingModule {}
