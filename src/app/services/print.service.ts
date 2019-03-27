import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { Feature } from 'geojson';

const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor() { }

  private mapFeatures(features: Feature[], mapping: Object) {
    return features.map(feature => {
      const returnObj: Object = {};
      for (const key of Object.keys(mapping)) {
        const name = mapping[key];
        returnObj[name] = feature.properties[key];
      }
      return returnObj;
    });
  }

  public exportAsExcelFile(features: Feature[], mapping: Object, prefixFileName = '') {
    const data = this.mapFeatures(features, mapping);
    const fileName = prefixFileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION;
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, fileName, { bookType: 'xlsx', type: 'buffer' });
  }

  public printDirectly(feature: Feature[], mapping: Object) {
    const data = this.mapFeatures(feature, mapping);
    let html = '<table>';
    html += '<tr>';
    const keys = Object.keys(data[0]);
    keys.forEach(key => {
      html += `<th>${key}</th>`;
    });
    html += '</tr>';

    data.forEach(item => {
      html += '<tr>';
      keys.forEach(key => {
        html += `<td>${item[key]}</td>`;
      });
      html += '</tr>';
    });

    html += `
    <style>
      table {
        border-collapse: collapse;
      }
      table, th, td {
          border: 1px solid black;
          padding: 5px;
      }
    </style>
    `;

    // console.log(html);
    const newWin = window.open();
    newWin.document.write(html);
    newWin.print();
    newWin.close();
  }
}
