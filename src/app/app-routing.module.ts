import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TimesheetUploadComponent } from './timesheet-upload/timesheet-upload.component';


const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
 { path: 'login', component: LoginComponent },
 { path: 'addemployee', component: AddEmployeeComponent },
 { path: 'employeedetails', component: EmployeeDetailsComponent },
 { path: 'timesheetupload', component: TimesheetUploadComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}





