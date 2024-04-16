import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Employee} from '../../core/models/employee';
import {EmployeeService} from '../../core/services/employee.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  employee: Employee = {} as Employee;
  search: string = '';

  constructor(protected employeeService: EmployeeService) {
    this.employeeService.fetchEmployees().then();
  }
  save() {
    if (!this.employee.code) {
      alert('Code is required');
      return;
    }
    if (!this.employee.name) {
      alert('Name is required');
      return;
    }
    this.employeeService.addEmployee(this.employee).then();
  }

  clear() {
    this.employee = {} as Employee;
  }

  edit(emp: Employee) {
    this.employee = emp;
  }

  delete(emp: Employee) {
    this.employeeService.deleteEmployee(emp).then();
  }

  searchEmployee() {
    if (this.search) {
      this.employeeService.employees
        .update((employees) => employees
          .filter((emp) =>
            emp.code.toLowerCase().includes(this.search.toLowerCase())
            || emp.name.toLowerCase().includes(this.search.toLowerCase())
            || emp.remarks.toLowerCase().includes(this.search.toLowerCase())
            || emp.address.toLowerCase().includes(this.search.toLowerCase())
            || emp.phone.toLowerCase().includes(this.search.toLowerCase())));
    } else {
      this.employeeService.fetchEmployees().then();
    }
  }
}
