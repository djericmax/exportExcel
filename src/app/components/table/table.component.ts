import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/Excel.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  sheetName = 'Linhas de Negócio';
  fileName = "Table_to_Excel.xlsx"

  exportexcel():void{
    let element = document.getElementById("TABLE_to_Excel");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, this.sheetName);

    XLSX.writeFile(wb, this.fileName)
  }


  constructor(private excelService: ExcelService) { }

  ngOnInit() {
  }

data:any = [{1:'a'},{2:'b'},{3:'c'},{4:'d'},{5:'e'},{6:'f'}]

  exportAsXLSX(): void{
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }

}
