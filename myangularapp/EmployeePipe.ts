import {Pipe} from '@angular/core';

@Pipe({
    name:'filter',
    
})
export class EmployeePipe
{
    public transform(source:any[]):any[]
    {
        return source.filter(x=>x.dept=='Sales');
    }
}