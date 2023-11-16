import { Component, OnInit, SecurityContext } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { DomSanitizer } from '@angular/platform-browser';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

@Component({
  selector: 'app-pdf-make',
  templateUrl: './pdf-make.component.html',
  styleUrls: ['./pdf-make.component.scss'],
})
export class PdfMakeComponent implements OnInit {
  public chart!: Chart;
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        label: 'Attempt Status',
        data: [0, 0, 0, 0],
        backgroundColor: '#85bad8',
        hoverBackgroundColor: '#0c699e',
      },
    ],
  };
  //* Adding responsive property to the chart
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };
  public stringImagePath: string = '';

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const context = document.getElementById('myChart') as HTMLCanvasElement;

    this.barChartData.labels = ['Example 1', 'Example 2', 'Example 3'];
    this.barChartData.datasets[0].data = [10, 12, 9];

    this.chart = new Chart(context, {
      type: 'bar',
      data: this.barChartData,
      options: this.barChartOptions,
    });
  }

  /**
   * * Generates an image in base64 format and then generates a PDF using that image.
   */
  public exportPDF(): void {
    this.generateImageBase64();
    this.generatePDF();
  }

  public generateImageBase64(): void {
    const chartBase64 = `${this.chart.toBase64Image()}`;

    this.stringImagePath = this._sanitizer.sanitize(
      SecurityContext.RESOURCE_URL,
      this._sanitizer.bypassSecurityTrustResourceUrl(chartBase64)
    ) as string;

    console.log('this.stringImagePath -->', this.stringImagePath);
  }

  public generatePDF(): void {
    const fonts = {
      Roboto: {
        normal:
          'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
        bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
        italics:
          'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
        bolditalics:
          'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf',
      },
    };

    const pdfDefinition = {
      content: [
        {
          columns: [
            {
              width: '50%',
              text: 'Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
              fontSize: 15,
            },
            {
              width: 200,
              image: this.stringImagePath,
            },
          ],
        },
      ],
      defaultStyle: {
        font: 'Roboto',
      },
    } as TDocumentDefinitions;
    pdfMake.createPdf(pdfDefinition, undefined, fonts).download();
  }
}
