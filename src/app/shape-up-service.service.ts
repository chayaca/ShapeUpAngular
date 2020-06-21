import { Members } from './Classes/members';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Response } from 'selenium-webdriver/http';
import { promise } from 'protractor';
import { resolve } from 'path';
import { Shapes } from './Classes/Shapes';
import { Projects } from './Classes/projects';
import { Area } from './Classes/area';
import { NavbarComponent } from './navbar/navbar.component';
// import shape from '@material-ui/core/styles/shape';
import { Result } from './Classes/Result';
import { Points } from './Classes/Points';
import { fullShape } from './Classes/fullShape';

@Injectable({
  providedIn: 'root'
})
export class ShapeUpServiceService {
  [x: string]: any;
Shownavbar:boolean;
  member: Members=new Members();
  project: Projects=new Projects();
  projectList: Array<Projects>;
  _shapesList: Array<Shapes>;
  _currentProject: Projects = new Projects();
  _currentShape:Shapes=new Shapes();
  _area: Shapes=new Shapes();
  shape:Shapes=new Shapes();
  
  public get area(): Shapes {
    return this._area;
  }

  public set area(area: Shapes) {
    this._area = area;
  }
  public get currentProject(): Projects {
    return this._currentProject;
    //return this._currentProject.asObservable();
  }

  public set currentProject(project: Projects) {
    this._currentProject = project;
  }
  public get shapesList(): Array<Shapes> {
    return this.shapesList;
    //return this._currentProject.asObservable();
  }

  public set shapesList(shapes: Array<Shapes>) {
    this.shapesList = shapes;
  }
  public get currentShape(): Shapes {
    return this._currentShape;
    //return this._currentProject.asObservable();
  }

  public set currentShape(Shapes: Shapes) {
    this._currentShape = Shapes;
  }

  constructor(private http: HttpClient) {
  }
  GetMember(name: string, password: string) {

    return this.http.get<Members>("http://localhost:5000/api/shapeup/members/" + name + "/" + password).pipe();

  }
  GetShapes() {
    return this.http.get<Array<Shapes>>("http://localhost:5000/api/shapeup/shapes/" + this._currentProject.id).pipe();
  }
  AddMember(member): Observable<Members> {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    const requestBody = JSON.stringify(member);
    return this.http.post<Members>("http://localhost:5000/api/shapeup/Members", requestBody, httpOptions);
  }
  ChangeMemberPassword(member) {
    let m = JSON.stringify(member);
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    let options = { headers: headers };
    return this.http.post<Members>("http://localhost:5000/api/shapeup/member", m, options).pipe();
  }
  //מקבלת קוד לקוח ומחזירה רשימה של הפרויקטים
  GetProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>('http://localhost:5000/api/shapeup/projects/' + this.member.id + '').pipe();
  }
  //קבלת פרטי הפרויקט לפי קוד פרויקט
  GetProject(id: number): Observable<Projects> {
    return this.http.get<Projects>('http://localhost:5000/api/shapeup/projects/' + id + '');
  }
  AddProject(project): Observable<Projects> {
    project.memberId=this.member.id;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    const requestBody = JSON.stringify(project);
    return this.http.post<Projects>("http://localhost:5000/api/shapeup/Projects", requestBody, httpOptions);
  };
  EditProject(project):Observable<Projects>
  {
    let pr = JSON.stringify(project);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.http.post<Projects>('http://localhost:5000/api/shapeup/project', pr, httpOptions); 
  }
  DeleteProject()
  {
    return this.http.delete('http://localhost:5000/api/shapeup/projects/'+this.currentProject.id); 
  }

  AddShape(shape): Observable<fullShape> {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    const requestBody = JSON.stringify(shape);
    return this.http.post<fullShape>("http://localhost:5000/api/shapeup/shape/"+ this.currentProject.id, requestBody, httpOptions);
  }
  Getshape():Observable<Shapes>{
    return this.http.get<Shapes>('http://localhost:5000/api/shapeup/Shape/' + this._currentShape.id+ '').pipe();
  }
  Getshapes(){
    return this.http.get<Shapes[]>('http://localhost:5000/api/shapeup/Shapes/' + this.currentProject.id+ '').pipe();
  }
  GetFullShapes(){
    return this.http.get<fullShape[]>('http://localhost:5000/api/shapeup/fullshapes/' + this.currentProject.id+ '').pipe();
  }
  EditShape(shape) {
    let a = JSON.stringify(shape);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    debugger;
    return this.http.post<fullShape>("http://localhost:5000/api/shapeup/shapes/"+this.currentProject.id, a, httpOptions).pipe();
  }
  DeleteShape(id:number) {
    return this.http.delete("http://localhost:5000/api/shapeup/shape/" +id+"/"+this.currentProject.id+'').pipe();
  }
  Run() {
    return this.http.get<boolean>("http://localhost:5000/api/shapeup/" +this.currentProject.id+'').pipe();
  }
  GetResult(id: number) {
    return this.http.get<Result>("http://localhost:5000/api/shapeup/result/"+this.currentProject.id+'/' +id+'').pipe();
  }
  GetPoints(id:number){
    return this.http.get<Points[]>("http://localhost:5000/api/shapeup/points/" +id+'').pipe();
  }
}

