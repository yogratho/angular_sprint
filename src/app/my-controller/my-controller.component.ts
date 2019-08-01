import { Component, OnInit } from '@angular/core';
import { TrainerSkillService} from '../trainer-skill.service';
@Component({
  selector: 'app-my-controller',
  templateUrl: './my-controller.component.html',
  styleUrls: ['./my-controller.component.css']
})
export class MyControllerComponent implements OnInit {
  public skillObj=[];
  public errorMessage:string;
  public Id:string;
  public check=false;
  public response=false;
  constructor(private trainerSkill:TrainerSkillService) { }

  ngOnInit() {

    // this.trainerSkill.getTrainerSkills(this.Id).subscribe(data =>{
    //   console.log(data)
    //   this.skillObj=data});
  }
  showSkills()
  {
    this.trainerSkill.getTrainerSkills(this.Id).subscribe(data =>{
      // console.log(data);
      
 
      this.skillObj=data;
      this.check=true;
    },
    error=>{
      this.response=true;
      this.errorMessage=error.error.message;
    }
    
    );
      // this.check=true;
  }


}
