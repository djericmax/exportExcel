import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import { MattabComponent } from './components/mattab/mattab.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatButtonModule } from '@angular/material/button';
import { ExcelService } from './services/Excel.service';
import { DivComponent } from './components/div/div.component';
import { HomeComponent } from './components/home/home.component';
import { JsonComponent } from './components/json/json.component';
import { AlasqlComponent } from './components/alasql/alasql.component';

import * as alasql from 'alasql';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MattabComponent,
    DivComponent,
    HomeComponent,
    JsonComponent,
    AlasqlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableExporterModule,
    MatButtonModule
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
