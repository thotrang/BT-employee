import { Employee } from "./staff";

export class EmployeeManager {
    static employees: Employee[] = [];
    constructor() { }
    addEmployee(employee: Employee) {
        EmployeeManager.employees.push(employee);
    }
    delEmployee(name: string) {
        for (let i = 0; i < EmployeeManager.employees.length; i++) {
            if (name ===EmployeeManager.employees[i].name)
                EmployeeManager.employees.splice(i,1);
        }
    }
    info(employee: Employee){
        console.log(`${employee.name}\n${employee.address}\n${employee.birstday}\n${employee.scope}`);      
    }

}