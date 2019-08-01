import { Component, OnInit } from '@angular/core';
import { TrainerSkillService } from '../trainer-skill.service';
import { ITrainer } from '../trainer';

@Component({
  selector: 'app-skill-addition',
  templateUrl: './skill-addition.component.html',
  styleUrls: ['./skill-addition.component.css']
})
export class SkillAdditionComponent implements OnInit {
  public message=[];
  public Id:string;
  public skillDesc:string;
  public check=true;
  public response=false;
  public datatosend:ITrainer={employeeId:'null',skillDesc:'null'};
  constructor(private trainerSkill:TrainerSkillService) { }

  ngOnInit() {
  }
  addSkills()
  {
    this.datatosend.employeeId=this.Id;
    this.datatosend.skillDesc=this.skillDesc;
    this.trainerSkill.skillAddition(this.datatosend).subscribe(data=>this.message=data);
    this.check=false;
    this.response=true;
  }

}
