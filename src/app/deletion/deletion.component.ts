import { Component, OnInit } from '@angular/core';
import { TrainerSkillService } from '../trainer-skill.service';

@Component({
  selector: 'app-deletion',
  templateUrl: './deletion.component.html',
  styleUrls: ['./deletion.component.css']
})
export class DeletionComponent implements OnInit {
  public message=[];
  public Id:string;
  public check=true;
  public response=false;

  constructor(private trainerSkill:TrainerSkillService) { }

  ngOnInit() {
    // this.trainerSkill.skilldeletion(this.Id).subscribe(data=>this.message=data);
  }
  deleteSkills()
  {
    this.trainerSkill.skilldeletion(this.Id).subscribe(data=>this.message=data);
    this.check=false;
    this.response=true;
  }


}
