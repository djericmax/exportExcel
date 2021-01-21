import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlasqlComponent } from './components/alasql/alasql.component';
import { DivComponent } from './components/div/div.component';
import { HomeComponent } from './components/home/home.component';
import { JsonComponent } from './components/json/json.component';
import { MattabComponent } from './components/mattab/mattab.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'div', component: DivComponent},
  {path: 'table', component: TableComponent},
  {path: 'mattab', component: MattabComponent},
  {path: 'json', component: JsonComponent},
  {path: 'alasql', component: AlasqlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
