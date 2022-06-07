import { EmployeeManager } from "./Employee-manager";
import { Employee } from "./staff";
let man1=new Employee('tuân',new Date(2000,12,23),'chí linh','chủ tịch');
let man2=new Employee('linh',new Date(2000,4,23),'chí linh','nhân viên');

let manager=new EmployeeManager();
manager.addEmployee(man1);
manager.addEmployee(man2);
console.log(EmployeeManager.employees);
