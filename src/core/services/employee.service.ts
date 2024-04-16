import {Injectable, signal, WritableSignal} from '@angular/core';
import {Employee} from '../models/employee';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: WritableSignal<Employee[]> = signal([] as Employee[]);
  constructor(private storageService: StorageService) { }

  async fetchEmployees() {
    const result = await this.storageService.getItem('employee');
    if (result) {
      this.employees.set(result);
    }
  }

  async addEmployee(employee: Employee) {
    if (this.employees().find((emp) => emp.code === employee.code)) {
      alert('Employee already exists');
      return;
    }
    this.employees.update((employees) => [...employees, employee]);
    await this.storageService.setItem('employee', this.employees());
  }

  async deleteEmployee(employee: Employee) {
    this.employees.update((employees) => employees.filter((emp) => emp.code !== employee.code));
    await this.storageService.setItem('employee', this.employees());
  }

  async updateEmployee(employee: Employee) {
    this.employees.update((employees) => employees.map((emp) => emp.code === employee.code ? employee : emp));
    await this.storageService.setItem('employee', this.employees());
  }
}
