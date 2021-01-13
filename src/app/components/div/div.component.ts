import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/Excel.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.scss']
})
export class DivComponent implements OnInit {

  fileName = "DIV_to_Excel.xlsx"
  exportexcel():void{
    let element = document.getElementById("DIV_to_Excel");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

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
