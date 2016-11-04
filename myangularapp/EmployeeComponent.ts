import {Component} from '@angular/core';


@Component({
    selector:'employeecomponent',
    template:`
    <h2>Employee List (without filter)</h2>
    <ul>
        <li *ngFor="let emp of Employees">
            {{emp.empid}},  {{emp.empname}}, {{emp.dept}}
        </li>
    </ul>

    
    <h2>Employee List (dept=Sales)</h2>
    <ul>
        <li *ngFor="let emp of Employees|filter">
            {{emp.empid}},  {{emp.empname}}, {{emp.dept}}
        </li>
    </ul>
    
    <hr/>
    
    <button (click)='AddNewEmp()'>
        Add new employee in Sales dept
    </button>

    <h3>Total Employee count: {{Employees.length}}</h3>
    `,
   
})
export class EmployeeComponent
{
    public Employees = [
        {empid:1,empname:'A',dept:'Sales'},
        {empid:2,empname:'B',dept:'Admin'},
        {empid:3,empname:'C',dept:'Sales'},
        {empid:4,empname:'D',dept:'Admin'},
        {empid:5,empname:'E',dept:'Sales'}
    ]
    public AddNewEmp():void
    {
        let temp:any[] = this.Employees;
        this.Employees = [];
        
        temp.push({empid:999,empname:'XYZ',dept:'Sales'});
        
        for (var index = 0; index < temp.length; index++) 
        {
            this.Employees.push(temp[index]);
        }
        //this.Employees.push({empid:999,empname:'KARTHIK',dept:'Sales'});
    }
}
