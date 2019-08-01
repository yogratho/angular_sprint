import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Training Management System';
  mycheck=true;
 constructor(private router:Router){}
  redirecrSkill()
  {
    this.router.navigateByUrl("trainerSkill");
    this.mycheck=false;
  }
  mostSkilled()
  {
    this.router.navigateByUrl("mostVersatile");
    this.mycheck=false;

  }
  deleteSkill()
  {
    this.router.navigateByUrl("deletionpage");
    this.mycheck=false;

 
  }
  addskill()
  {
    this.router.navigateByUrl("addSkill");
    this.mycheck=false;


  }
  skillBased()
  {
    this.router.navigateByUrl("skillCount");
    this.mycheck=false;


  }
}
