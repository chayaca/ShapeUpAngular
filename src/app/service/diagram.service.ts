import { Injectable } from '@angular/core';

import { from } from 'rxjs';
import { Shape } from '../Classes/shape';
@Injectable({
  providedIn: 'root'
})
export class DiagramService {
  public nodes = [];
  public shapeList:Shape[]=[];
  public currentClickTableId:number=1;
  
 
  constructor() { }
}
