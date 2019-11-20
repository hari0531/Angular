import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent } from'./employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list.component';


const routes: Routes = [
{path:'create', component:EmployeeComponent},
{path:'list',component:EmployeeListComponent},
{path:'',redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
