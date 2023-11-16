import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { PdfMakeComponent } from './pdf-make.component';
import { PDFMakeRoutingModule } from './routing';

@NgModule({
  declarations: [PdfMakeComponent],
  imports: [NgChartsModule, PDFMakeRoutingModule],
  providers: [],
  exports: [],
})
export class PdfMakeComponentModule {}
