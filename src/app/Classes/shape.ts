import { point } from './point';

import { ShapeType } from './shape-type';

export class Shape {
    id:number;
    type:ShapeType;
    sumPlaces:number;
    location:point;
  
    
   
    isFullSide:boolean;
    width:number;
    height:number;
    
        
    
    
    constructor(){
        this.location=new point(0,0);
        
    }

}
