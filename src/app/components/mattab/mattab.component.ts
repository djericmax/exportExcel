import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MattabDataSource, MattabItem } from './mattab-datasource';

@Component({
  selector: 'app-mattab',
  templateUrl: './mattab.component.html',
  styleUrls: ['./mattab.component.css']
})
export class MattabComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MattabItem>;
  dataSource: MattabDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nome', 'idade', 'telefone', 'UF'];

  ngOnInit() {
    this.dataSource = new MattabDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
