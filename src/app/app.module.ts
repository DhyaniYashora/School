import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReliefComponent } from './relief/relief.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion'; 
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api'; 
import { SidebarModule } from 'primeng/sidebar';
import { TimeTableComponent } from './time-table/time-table.component';
import { TeacherComponent } from './teacher/teacher.component';
import { LeaveComponent } from './leave/leave.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, ReliefComponent, TimeTableComponent, TeacherComponent, LeaveComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    TableModule,
    CardModule,
    DropdownModule,
    AccordionModule,
    MenuModule,
    BreadcrumbModule,
    StepsModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
