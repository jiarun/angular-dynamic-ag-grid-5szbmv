import { Component } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { ColDef } from 'ag-grid-community';

import { MyLinkRendererComponent } from './my-link-renderer.component'; 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  columnDefs: ColDef[];
  rowData = [
    { 'car': 'Audi', 'releaseDate': '2018-01-04', 'price': 99000 },
    { 'car': 'Tesla', 'releaseDate': '2020-03-01', 'price': 49000 },
    { 'bus': 'MAN', 'releaseDate': '2015-02-02', 'price': 1234500 },
    { 'bus': 'Volvo', 'releaseDate': '2016-06-03', 'price': 2234500 }
  ];

  constructor(private dateFormatter: DatePipe, private numberFormatter: DecimalPipe) {
    const columns = ['car', 'bus', 'releaseDate', 'price'];
    this.setColumns(columns);
   }

  setColumns(columns: string[]) {
    this.columnDefs = [];
    columns.forEach((column: string) => {
      let definition: ColDef = { headerName: column, field: column, width: 120 };
      if (column === 'car' || column === 'bus') {
        definition.cellRendererFramework = MyLinkRendererComponent;
        definition.cellRendererParams = {
          inRouterLink: column,
        };
      } else if (column.endsWith('Date')) {
        definition.valueFormatter = (data) => this.dateFormatter.transform(data.value, 'shortDate');
      } else if (column === 'price') {
        definition.valueFormatter = (data) => this.numberFormatter.transform(data.value, '1.2-2');
        definition.type = 'numericColumn';
      }
      this.columnDefs.push(definition);
    });
  }

}
