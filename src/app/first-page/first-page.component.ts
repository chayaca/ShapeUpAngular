import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private fb:FormBuilder,private router: Router) { }
  profileForm = this.fb.group({
    firstName: ['', [Validators.min(5),Validators.required]],
    // lastName: ['']
  });

  ngOnInit() {
  }
  drowing()
  {
      this.router.navigate(['./drowing']);
  }
minDate=new Date();
dateFilter=date=>{
  const day=date.getDay();
  return day!=0;
}

}
