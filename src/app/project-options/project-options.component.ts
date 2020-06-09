import { Component, OnInit } from '@angular/core';
import { Projects } from '../Classes/projects';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ShapeUpServiceService } from 'src/app/shape-up-service.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-project-options',
  templateUrl: './project-options.component.html',
  styleUrls: ['./project-options.component.css']
})
export class ProjectOptionsComponent implements OnInit {
  http:HttpClient;
  model=new Projects();
  doneProjects:Projects[];
  undoneProjects:Projects[];
  projects: Projects[];
  constructor(private s:AppComponent,private router: Router, private projectsService: ShapeUpServiceService) { }
//   this.projects = this.s.getProjects();
//   this.projects.forEach(element => {
//     if(element.Status==0){
//       this.undoneProjects.add(element);
//     }
//     else{
//       this.doneProjects.add(element);
//     }
//   });
// }
  ngOnInit() {
  }
 }

