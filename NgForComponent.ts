import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector:'ngfor-component',
    template:`
        <div class="container">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3>NgFor</h3>
                </div>

                <div class="panel-body">
                    <p *ngFor="#emp of Employees;#i=index">
                        {{i+1}}
                        {{emp.EmpId}} {{emp.EmpName}}
                    </p>

                    <table width="75%" align="center" border="1" class="table">
                        <thead>
                            <tr>
                                <td align='center'>Sr. No.</td>
                                <td align='center'>Employee Id</td>
                                <td align='center'>Employee Name</td>
                            </tr>
                        </thead>
                        <tr *ngFor="#emp of Employees;#i=index">
                            <td>{{i+1}}</td>
                            <td>{{emp.EmpId}}</td>
                            <td>{{emp.EmpName}}</td>
                        </tr>
                    </table>

                    <select>
                        <option *ngFor="#emp of Employees">
                            {{emp.EmpId}}
                        </option>
                    </select>
                </div>
            </div>
        </div>
    `
})
export class NgForComponent
{
    public Employees:Employee[] = [
        new Employee(100,'Karthik'),
        new Employee(101,'Kevin'),
        new Employee(102,'Ajit'),
        new Employee(103,'Viren'),
        new Employee(104,'Tushar')
    ];
}

class Employee
{
    constructor(public EmpId:number,public EmpName:string)
    {

    }
    public selectedemployee:Employee;
}

bootstrap(NgForComponent);