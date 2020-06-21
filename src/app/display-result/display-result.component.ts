import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { ShapeUpServiceService } from '../shape-up-service.service';
import { Shapes } from '../Classes/Shapes';
import { Points } from '../Classes/Points';
import { Router } from '@angular/router';
import { Result } from '../Classes/Result';
import { fullShape } from '../Classes/fullShape';
//call function that runs project sends pid
//checks if false send message to user
//if true this component
@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {
  [x: string]: any;
  area=new Shapes();
  shapes= Array<Shapes>();
  point=new Points();
  shape=new Shapes();
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;  
  private ctx: CanvasRenderingContext2D;

  
  constructor(@Inject(DOCUMENT) document, private resultService: ShapeUpServiceService,private router: Router) { 
  }
  Resize(area :Shapes) {
    let minX=0;
    let maxX=0;
    let minY=0;
    let maxY=0;
    let i=0;
    for (let p of area.point) {
      if(p.x>area.point[maxX].x){
        maxX=i;
      }
      else if(p.x<area.point[maxX].x){
        minX=i;
      }
      if(p.y>area.point[maxY].y){
        maxY=i;
      }
      else if(p.y<area.point[maxY].y){
        minY=i;
      }
      i++;
    }
    let height=area.point[maxY].y-area.point[minY].y;
    let width=area.point[maxX].x-area.point[minX].x;
    this.ctx.canvas.height=height*40;
    this.ctx.canvas.width=width*40;  
  }
 
  drawShapes(area:Shapes, shapes:Shapes[]){
    this.Resize(area);
    this.ctx.beginPath();
    shapes.forEach((element) => {
      let xDist=element.result.pointOfShapeX-element.result.pointOnAreaX;
      let yDist=element.result.pointOfShapeY-element.result.pointOnAreaY;
      let points=element.point;
      this.ctx.moveTo((points[0].x-xDist)*40, this.ctx.canvas.height-((points[0].y-yDist)*40));
      for(let p of points){
        this.ctx.lineTo((p.x-xDist)*40, this.ctx.canvas.height-((p.y-yDist)*40));
      }
      this.ctx.lineTo((points[0].x-xDist)*40, this.ctx.canvas.height-((points[0].y-yDist)*40));      
    });
      this.ctx.fillStyle="goldenrod";
      this.ctx.fill();
      this.ctx.strokeStyle="darkblue";
      this.ctx.stroke();
      this.ctx.save();
  }
  getShapes(){
    let shape=new fullShape();
    let s=new Shapes();
    this.resultService.GetFullShapes().subscribe((data: fullShape[])=>
      {
        data.forEach((element) => {
          console.log(element);
          if(element.shape.area == true){
            shape=element;
            this.area=shape.shape;
            this.area.point=shape.points;
            this.area.result=(shape.result);
           
          }
          else{
           shape=element;
           s=shape.shape;
           s.point=shape.points;
           s.result=shape.result;
       
           this.shapes.push(s);
            shape=new fullShape();
            s=new Shapes();
          }
      });
     this.drawShapes(this.area, this.shapes);
      });
  }
  ngOnInit() {
    this.resultService.Run().subscribe((data:boolean)=>{
      if(data==false){
        alert('no result. increase area size or remove some shapes');
      }
      else{
        this.getShapes();
      }
    })
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }
  return()
  {
    this.router.navigate(['./project-options']);
  }
}
