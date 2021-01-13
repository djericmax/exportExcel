import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivComponent } from './components/div/div.component';
import { HomeComponent } from './components/home/home.component';
import { MattabComponent } from './components/mattab/mattab.component';
import { TableComponent } from './components/table/table.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'table', component: TableComponent},
  {path: 'mattab', component: MattabComponent},
  {path: 'div', component: DivComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
