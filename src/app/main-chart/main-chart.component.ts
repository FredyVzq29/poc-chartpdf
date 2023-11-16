import { Component, OnInit, SecurityContext } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { DomSanitizer } from '@angular/platform-browser';
import jsPDF from 'jspdf';
import { PDFBuilder } from '../pdfObejcts/pdfBuilder.class';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.scss'],
})
export class MainChartComponent implements OnInit {
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

  /**
   * * Generates a base64 image representation of a chart and assigns it to the imagePath variable.
   */
  public generateImageBase64(): void {
    const chartBase64 = `${this.chart.toBase64Image()}`;

    this.stringImagePath = this._sanitizer.sanitize(
      SecurityContext.RESOURCE_URL,
      this._sanitizer.bypassSecurityTrustResourceUrl(chartBase64)
    ) as string;
  }

  /**
   * * Generates a PDF document and converts it to a base64 encoded string.
   */
  public generatePDF(): void {
    const pdfObject = new jsPDF();
    const builder = new PDFBuilder();

    /**
     * * POC - This is a architecture to add text and images to the PDF using only FOR OF loops
     */
    // for (const text of builder.configText) {
    //   pdfObject.setFontSize(text.fontSize);
    //   pdfObject.setTextColor(text.color);
    //   pdfObject.setFont(text.typography);

    //   for (const message of text.textArray) {
    //     pdfObject.text(message.text, message.x, message.y);
    //   }
    // }

    pdfObject.addImage(this.stringImagePath, 'PNG', 50, 50, 200, 100);
    pdfObject.setFontSize(16);
    pdfObject.setTextColor(255, 0, 0);
    pdfObject.text('This is a test', 10, 20);

    pdfObject.setTextColor(0, 255, 0);
    pdfObject.text('This is a second test', 40, 20);
    pdfObject.save('My Report');
  }
}
