import {Pipe} from '@angular/core';

@Pipe({
    name:'square'
    
})
export class SquarePipe
{
    //{{somevalue | square}}
    public transform(value:number):number
    {   
        console.log("transform called with value: " +value);
        return (value*value);
    }
}



