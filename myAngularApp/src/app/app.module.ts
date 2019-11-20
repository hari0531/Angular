import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StudentModule} from './student/student.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { Test1Component } from './employee/test1/test1.component';
import { InlineTestComponent } from './inline-test/inline-test.component';
import { EmployeeServiceService } from './employee-service.service';
import {CustomerService } from './customerService/customer.service';
import { CourseModule } from './course/course.module';
import { MydirectiveDirective } from './mydirective.directive'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    Test1Component,
    InlineTestComponent,
    MydirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    CourseModule
  ],
  providers: [EmployeeServiceService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
